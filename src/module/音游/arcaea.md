# Arcaea <Badge type="tip" text="稳定" vertical="middle"/>

提供 Arcaea 查分以及铺面信息等相关功能

::: warning
Arcaea 是 Lowiro 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Lowiro 所有Lowiro 没有认可也不对本项目或其内容负责。
:::
::: danger 
使用本模块将违反 Arcaea 使用条款 中的 3.2-4 和 3.2-6，以及 Arcaea 二次创作管理条例。

使用本模块将视为您自愿承担一切因使用本模块而造成的损失，并知悉 RinBot 不予承担任何责任。
:::
::: warning
使用本模块将默认您允许 SuzuBot 收集和记录关于您的使用记录，包括但不限于 Arcaea 用户名、游玩记录等。

您的数据将用于历史潜力值显示、最高分记录显示、推分建议等功能。

我们将使用行业安全标准来保存数据，并不会提供给任何第三方。
:::

## 主命令

Arcaea 功能的主指令

下文中主命令的部分可以互相替换

默认行为与 [最近成绩 (Recent)](#最近成绩-recent) 相同

用法:
```
/a
/arc
```

### 难度参数

部分命令需要提供难度参数，难度参数可以是以下几种格式：

- 数字 0/1/2/3
- 难度缩写 pst/prs/ftr/byd

若难度留空，则默认为 `Future`

## 绑定

将用户与一个 Arcaea 账户绑定

本模块中大部分功能都需要绑定才能够使用

如果已存在一个绑定 Arcaea 账户，则将会自动更换绑定

用法:
```
/arc bind <好友代码 或 名称>
```

## 解绑

解除用户与 Arcaea 账户的绑定关系

用法:
```
/arc unbind
```

## 绑定信息

获取用户的绑定信息和潜力值变化图表

用法:
```
/arc bindinfo
```

## 最近成绩 (Recent)

获取用户最近一次游玩记录成绩图

用法:
```
/arc recent
```

## 前30最佳成绩 (Best30)

获取指定用户按潜力值排序前 30 游玩记录成绩图

如果好友代码为空，则为获取对象为用户绑定的 Arcaea 账户

用法:
```
/arc best30 [好友代码]
/arc b30 [好友代码]
```

## 最佳成绩 (Best)

获取用户指定铺面最佳游玩记录的成绩图

用法:
```
/arc best <曲名 或 别名> [难度]
/arc info <曲名 或 别名> [难度]
```

## 歌曲信息

查询指定歌曲的基本信息

曲绘 曲名（英文/日文） 所在曲包 难度 定数 物量

用法:
```
/arc songinfo <曲名 或 别名>
/arc song <曲名 或 别名>
```

## 歌曲别名

查询指定歌曲的别名

用法:
```
/arc alias <曲名 或 别名>
```

## 铺面预览

获取指定铺面的平面化铺面预览图

用法:
```
/arc preview <曲名 或 别名> [难度]
/arc chart <曲名 或 别名> [难度]
```

## 定数计算

计算指定定数的铺面在指定成绩下的潜力值

用法:
```
/arc calc <定数> <分数>
```