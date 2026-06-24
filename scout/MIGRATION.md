# 把扫货官搬到 Mac Pro(不关机那台)

> Air 上的扫货已停。这台 Mac Pro 装好后,扫货就在它上面 24/7 跑,不再烫你的 Air。
> 全程约 10 分钟。跟着做即可。

## 前提(在 Mac Pro 上各装一次)

1. **Claude Code CLI** —— 装好后跑 `claude` 登录(用你的订阅账号)。验证:`claude --version`
2. **gh + git** —— `brew install gh git`(Apple Silicon)或对应包。
3. **git 能 push 本仓** —— 二选一:
   - 推荐:`gh auth login`(选 github.com / HTTPS / 用账号 `xmbud8888-coder`)→ 再 `gh auth setup-git`。
   - 或:建 `~/.git-credentials`,写一行 `https://xmbud8888-coder:<你的GitHub token>@github.com`,然后 `git config --global credential.helper store`。

## 安装(三步)

```bash
# 1) 克隆注册表仓(位置随意,示例放 ~ 下)
git clone https://github.com/cchubai/cchub-registry.git ~/cchub-registry
cd ~/cchub-registry

# 2) 跑安装脚本(自动找 claude 路径、生成 launchd 任务、加载)
zsh scout/install-scout.sh

# 3) 立刻手动测一轮(脚本结尾会打印这条命令,照着跑)
launchctl kickstart -k gui/$(id -u)/ai.cchub.scout
```

## 验证它真在干活

```bash
# 看最新一轮日志(应看到 git pull / claude 扫货 / commit & push)
tail -f "$(ls -t ~/cchub-registry/scout-runs/*.log | head -1)"
# 看有没有真 push(候选库有没有新增)
cd ~/cchub-registry && git log --oneline -3
```

## 之后

- 每天 **00 / 04 / 08 / 12 / 16 / 20 点** 自动各扫一轮,push 到 `cchubai/cchub-registry`。
- **睡眠仍会漏**:Mac Pro 设成不休眠(`系统设置 → 锁屏/节能 → 永不睡眠`),或合盖也运行。launchd 会在唤醒后补跑错过的时段,但保持唤醒最稳。
- 停用:`launchctl bootout gui/$(id -u)/ai.cchub.scout`

## 安全边界(没变)

扫货官 headless claude **只有** WebSearch/Read/Edit/Write/Glob/Grep,**没有 Bash 工具** —— 结构上保证它绝不执行任何 clone 下来的陌生代码。git 全部由 runner 脚本确定性处理。
