# 核心模块 <Badge type="tip" text="稳定" vertical="middle"/>

提供查看和操作 SuzuBot 的功能

::: warning
这个模块无法被关闭
:::

## 查看模块

查看当前 SuzuBot 所加载的模块

如果在群聊环境中，还会额外打印模块在本群的开启状态

用法:
```
/cmdlist
```

## 模块控制 <Badge type="warning" text="管理员" vertical="middle"/>

控制 SuzuBot 的模块在本群的可使用性

被关闭的模块在本群无法使用

开启模块使用 `enable` 参数，关闭模块使用 `disable` 参数

用法:
```
/cmdctl <enable/disable> [模块名称..]
```

## Ping

检测 SuzuBot 是否在线

如果群聊该命令无法使用，说明可能 SuzuBot 受到腾讯风控

如果私聊该命令仍然无法使用，说明 SuzuBot 不在线，暂时无法提供服务

用法:
```
/ping
```

## Echo

复读一段消息

用法:
```
/echo <消息>
```

## 帮助

获取到本网站的链接

用法:
```
/help
```

## 反馈

向开发者反馈使用时遇到的问题，或是提出建议

用法:
```
/report <问题或建议>
```

## 退群 <Badge type="warning" text="管理员" vertical="middle"/>

主动让 SuzuBot 离开当前群聊

不再需要使用 SuzuBot 时，请使用本命令

::: danger
为了避免误伤需要留下的机器人，建议使用 `@铃酱` 的方式进行调用
:::

用法:
```
/quit
```