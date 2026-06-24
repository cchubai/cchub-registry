#!/bin/zsh
# CCHub claude-scout · 定时 runner（路径自适应,任意 Mac 通用）
# 设计:git 全部由本脚本确定性处理;claude headless 只给 WebSearch/Read/Edit/Write/Glob/Grep
#       —— 不给 Bash 工具 = 结构上保证 scout 绝不执行任何陌生代码。
set -uo pipefail

# 仓 = 本脚本所在目录的上一级(scout/ 的父目录)
REPO="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE="$(command -v claude || true)"
[ -z "$CLAUDE" ] && { echo "FATAL: 找不到 claude(确认已装且在 PATH)"; exit 1; }

TS="$(date +%Y-%m-%dT%H-%M-%S)"
mkdir -p "$REPO/scout-runs"
LOG="$REPO/scout-runs/$TS.log"

cd "$REPO" || { echo "FATAL: 进不去 $REPO"; exit 1; }

git config user.name  "claude-scout"   2>/dev/null
git config user.email "scout@cchub.ai" 2>/dev/null

NOW_DATE="$(date +%Y-%m-%d)"
NOW_TIME="$(date +%H:%M)"

read -r -d '' PROMPT <<EOF
你是 CCHub 注册表的扫货官 claude-scout。工作目录就是当前 repo(cchub-registry)。

硬约束(不可违反):
1. 你没有 Bash 工具,也绝不尝试执行/安装/运行任何代码。只用 WebSearch 搜、读文件、改 markdown。
2. license 一律标「⏳称」,绝不标「亲验」。
3. 进货单位=单品;目录/awesome/大礼包只当信源(🔵),穿透挑单颗才登记。
4. 不写「上架/通过」,只写候选状态(🟢候选/🔵信源/⚪待装测)。不替 tester/curator 拍板。
5. git 由外部脚本处理,你不要碰 git。

任务(一轮增量扫货):
- 先读 registry-candidates.md 了解已有候选,做去重。
- 用 WebSearch 找 Claude Code 生态【近期新增/热门】单品,覆盖五轴:方法论 skill / slash 命令 / subagent / MCP server / hook。
- 把【确实是新的、未登记过的】候选 append 进 registry-candidates.md 末尾,新建标题为『## ${NOW_DATE} · cron 扫货轮(${NOW_TIME})』的小节,表格列:名称+来源仓 handle、license(⏳称)、一句话品味、与 gstack 重叠度、裁决态。
- 本轮没新东西就写一行『本轮无新增(已去重)』,不要硬凑。
- 最后用一句话总结:新增 N 个 / 有无异常。
EOF

{
  echo "=== scout run $TS ==="
  echo "--- git pull ---"
  git pull --no-edit 2>&1

  echo "--- claude headless 扫货(prompt 走 stdin,无 Bash 工具,禁执行陌生代码)---"
  print -r -- "$PROMPT" | "$CLAUDE" -p \
    --model claude-sonnet-4-6 \
    --allowedTools "WebSearch,Read,Edit,Write,Glob,Grep" 2>&1

  echo "--- git commit & push ---"
  git add -A
  if git diff --cached --quiet ; then
    echo "无改动,跳过 commit"
  else
    git commit -m "chore(scout): cron 自动扫货轮 $TS" 2>&1
    git push 2>&1
  fi
  echo "=== done $TS ==="
} >> "$LOG" 2>&1

# 保留最近 30 份日志
ls -1t "$REPO/scout-runs/"*.log 2>/dev/null | tail -n +31 | xargs -I{} rm -f {} 2>/dev/null

exit 0
