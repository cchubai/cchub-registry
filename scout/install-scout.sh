#!/bin/zsh
# 在新 Mac 上一键安装 CCHub 扫货定时任务(launchd,每天 6 次:00/04/08/12/16/20 点)
# 前提:已 `claude` 登录 + git 能 push 本仓(见 MIGRATION.md)
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
RUNNER="$DIR/scout-runner.sh"
chmod +x "$RUNNER"

CLAUDE_BIN="$(command -v claude || true)"
[ -z "$CLAUDE_BIN" ] && { echo "❌ 找不到 claude —— 先装 Claude Code CLI 并 \`claude\` 登录"; exit 1; }
CLAUDE_DIR="$(dirname "$CLAUDE_BIN")"

UID_NUM="$(id -u)"
PLIST="$HOME/Library/LaunchAgents/ai.cchub.scout.plist"
mkdir -p "$HOME/Library/LaunchAgents"

cat > "$PLIST" <<PL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key><string>ai.cchub.scout</string>
    <key>ProgramArguments</key>
    <array><string>/bin/zsh</string><string>$RUNNER</string></array>
    <key>StartCalendarInterval</key>
    <array>
        <dict><key>Hour</key><integer>0</integer><key>Minute</key><integer>0</integer></dict>
        <dict><key>Hour</key><integer>4</integer><key>Minute</key><integer>0</integer></dict>
        <dict><key>Hour</key><integer>8</integer><key>Minute</key><integer>0</integer></dict>
        <dict><key>Hour</key><integer>12</integer><key>Minute</key><integer>0</integer></dict>
        <dict><key>Hour</key><integer>16</integer><key>Minute</key><integer>0</integer></dict>
        <dict><key>Hour</key><integer>20</integer><key>Minute</key><integer>0</integer></dict>
    </array>
    <key>RunAtLoad</key><false/>
    <key>StandardOutPath</key><string>/tmp/cchub-scout.launchd.log</string>
    <key>StandardErrorPath</key><string>/tmp/cchub-scout.launchd.log</string>
    <key>EnvironmentVariables</key>
    <dict><key>PATH</key><string>$CLAUDE_DIR:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</string></dict>
</dict>
</plist>
PL

launchctl bootout "gui/$UID_NUM/ai.cchub.scout" 2>/dev/null || true
launchctl bootstrap "gui/$UID_NUM" "$PLIST"

echo "✅ 扫货已安装到 launchd(每天 00/04/08/12/16/20 点跑)"
echo "   仓:        $DIR/.."
echo "   claude:    $CLAUDE_BIN"
echo ""
echo "▶ 立刻手动测一轮:  launchctl kickstart -k gui/$UID_NUM/ai.cchub.scout"
echo "  然后看产出:      tail -f \"\$(ls -t $(cd "$DIR/.." && pwd)/scout-runs/*.log | head -1)\""
echo "  停用:            launchctl bootout gui/$UID_NUM/ai.cchub.scout"
