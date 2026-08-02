# 反物质维度 服务器守护脚本说明

## 启动守护(手动)
```sh
setsid nohup sh /var/minis/workspace/ADChinese/server.sh > /tmp/server-guard.log 2>&1 &
```

## 停止守护
```sh
pkill -f "server.sh"; pkill -f "http-server"
```

## 机制
- 每 20 秒检查一次 http://localhost:8765/
- 服务器挂了自动重启(日志: /tmp/server-guard.log,服务器日志: /tmp/http-node.log)
- 注意: /var/minis 挂载不支持 chmod +x,必须用 `sh script.sh` 执行

## 局限
- 守护脚本跑在 iSH 里,iSH 被 iOS 完全杀掉时守护也会死
- 遇到"打不开"先试: 打开 iSH App 让进程解冻,守护会自动检查并重启
- 彻底方案: iOS 快捷指令自动化(打开 Safari/游戏时通过 URL scheme 唤醒 iSH)
