#!/bin/sh
# 反物质维度 http-server 守护脚本
# 每 20 秒检查一次 8765 端口,进程没了就自动重启
# 用法: setsid nohup /var/minis/workspace/ADChinese/server.sh > /tmp/server-guard.log 2>&1 &

GAME_DIR="/var/minis/workspace/ADChinese"
PORT=8765
LOG="/tmp/http-node.log"

start_server() {
  cd "$GAME_DIR" || exit 1
  setsid nohup http-server -a 127.0.0.1 -p "$PORT" -c-1 . > "$LOG" 2>&1 &
}

check_alive() {
  curl -s -o /dev/null --max-time 3 "http://localhost:$PORT/index.html"
}

# 启动循环
while true; do
  if ! check_alive; then
    # 端口可能被僵尸进程占着,先清
    pkill -f "http-server" 2>/dev/null
    sleep 1
    start_server
    echo "$(date '+%H:%M:%S') server restarted" >> /tmp/server-guard.log
  fi
  sleep 20
done
