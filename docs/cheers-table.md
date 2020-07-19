---
sidebar: auto
title: false
---
## cheersTable 表格
### 表格参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tableData | 显示的数据 | array | — | 
| tableHead | 表头数据 | array | 详见 表头参数 | 
| addBtnList | 操作列按钮 | array | 详见 扩展列按钮参数 | 
| height | Table 的高度  | string/number | — | 
| stripe | 是否为斑马纹 table | boolean |  true |
| border | 是否带有纵向边框 | boolean |  true |
| show-summary | 是否在表尾显示合计行 | boolean | false |
| indexShow | 是否显示序号列 | boolean | true |
| indexLabel | 序号列表头名字 | string | 序号 |
| selectionShow | 是否开启多选列 | boolean | false |
| expandShow | 是否显示扩展列 | boolean | false |
| expandList | 扩展列 | function | render |
| initListPermission | 按钮显示隐藏所需集合 | array | — |

### 表格返回事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| f_listenCall | 操作列按钮触发事件,返回方法名，行数据，扩展参数 | methods, scope, option |
| f_handleSelectionChange | 多选返回事件,返回选择的行数据 | 行数据 |


### 表头参数
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ---- |
| label | 表头名字 | — | string |
| prop | 表头字段名 | — | string |
| width | 列宽 | auto | number |
| align | 内容对齐方式 | cenrter | string |
| headerAlign | 表头对齐方式 | cenrter | string |
| fixed | 列是否固定 | false | boolean |
| sortable | 是否开启排序 | false | boolean |
| render | 开启自定义渲染 | function | function |
| showRow | 列显示隐藏的条件，一般根据searchForm | true | string，boolean |

### 扩展列按钮参数
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| title | 按钮名字 | selection, row |
| icon | 按钮图标 | selection |
| methods | 按钮触发事件名字 | selection |
| option | 参数扩展 | row, column, cell, event |
| showBtn | 是否显示 | row, column, cell, event |

