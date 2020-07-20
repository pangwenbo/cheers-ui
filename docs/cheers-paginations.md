---
sidebar: auto
title: false
---
## cheersPaginations 分页
### 分页参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| paginations | 分页数据 | object |  { } | 
| pageInationsConfig | 分页设置 | object | {} | 

### 分页数据参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| pageNum | 页码 | number | 0 | 
| pageSize | 每页展示数量 | number | 10 | 
| totalRowNum | 总数 | number | 0 | 

### 分页设置参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| layout | 分页布局 | string | "total, sizes, prev, pager, next, jumper" | 
| pageSizes | 每页展示数量设置 | array | [10, 20, 30, 50, 100] | 

### 分页返回事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| f_changPaginations | 分页操作返回数据 | {pageNum:0,pageSize:0,totalRowNum:0} |