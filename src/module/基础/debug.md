# 调试模块 <Badge type="tip" text="稳定" vertical="middle"/>

提供 SuzuBot 的调试信息和调试操作

普通用户无需关心本模块的内容，这里只是为了防止扇贝开发者忘了怎么用（

::: warning
这个模块无法被关闭
:::

## 状态报告

汇报 SuzuBot 以及其运行机的状态

用法:
```
/status
```

## 模块重载 <Badge type="danger" text="开发者" vertical="middle"/>

快速热重载所有模块

少用 好像会炸 AppDomain

用法:
```
/reload
```

## 内存回收 <Badge type="danger" text="开发者" vertical="middle"/>

强制执行一次 `GC.Collect()`

没啥用 该泄露的内存还是会泄露 垃圾还会上 Gen2

用法:
```
/gc
```