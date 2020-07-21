---
sidebar: auto
title: false
---
## cheersFrom 表单
### 表单参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| inline | 是否在行内 | boolean |  true | 
| labelWidth | form宽度 | number，string | — | 
| ruleFormBtn | 按钮设置 | array | [] | 
| fieldList | 表单form数据 | array | 详见表单类型 | 
| ruleForm | 表单数据 | object | {} | 

### 表单类型参数
| 参数      | 说明          | 类型       | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| Input | 输入框 | String | — | 
| Textarea | 文本域 | String | — | 
| Input | 数字 | String | — | 
| Password | 密码框 | String | — | 
| Select | 下拉框 | String | — | 
| Cascader | 级联下拉 | String | — | 
| Radio | 单选 | String | — | 
| Checkbox | 复选框 | String | — | 
| Year | yyyy | String | — | 
| YearMonth | yyyy-MM | String | — |
| Date | yyyy-MM-dd | String | — |
| DateRange | 起止时间 | String | — |
### Input 输入框
```js
{
        type: "Input", label: "输入框", value: "input",
        // 表单验证
        rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
},
```
### Textarea 文本域
```js
{
        type: "Textarea", label: "文本域", value: "textarea",
        // 表单验证
        rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
},
```
### NumberInput 数字
```js
{
        type: "NumberInput", label: "数字", value: "numberInput",
        rules: [{ required: true, message: "Year", trigger: "change" }],
        attr: { step: 5 },
        change: row => { console.log(row); }
},
```
### Password 密码框
```js
{
        type: "Password", label: "密码框", value: "password",
        rules: [{ required: true, message: "Year", trigger: "change" }],
        attr: { step: 5 },
        change: row => { console.log(row); }
},
```
### Select 下拉框
```js
{
	type: "Select", label: "下拉框", value: "sex",
	// 渲染数组// 下拉转换
	options: caseState, props: { label: "label", value: "value" },
	attr: {
		clearable: true
	},
	rules: [{ required: true, message: "请选择性别", trigger: "change" }],
	change: row => { console.log(row); }
}
```
### Cascader 级联下拉框
```js
{
	type: "Cascader", label: "级联下拉框", value: "city",
	// 渲染数组// 下拉转换
	options: this.selectData.cityData,
	props: { label: "departName", value: "id" },
	rules: [{ required: true, message: "请选择城市", trigger: "change" }],
	change: row => {  console.log(row);  }
}
```
### Radio 单选
```js
{
	type: "Radio", label: "单选", value: "radio",
	// 渲染数组// 下拉转换
	options: caseState,
        props: { label: "label", value: "value" }, 
        attr: {
		border: true
	},
	rules: [{ required: true, message: "请选择性别", trigger: "change" }],
	change: row => {  console.log(row);  }
}
```
### Checkbox 复选
```js
{
	type: "Checkbox", label: "复选", value: "box",
	// 渲染数组// 下拉转换
	options: caseState,
        props: { label: "label", value: "value" }, 
        attr: {
		border: true
	},
	rules: [{ required: true, message: "请选择性别", trigger: "change" }],
	change: row => {  console.log(row);  }
}
```
### Date 日期
```js
{
	type: "Year", label: "年", value: "year",
	rules: [{ required: true, message: "Year", trigger: "change" }],
	change: row => {   console.log(row);  }
}, {
	type: "YearMonth", label: "年月", value: "yearMonth",
	rules: [{ required: true, message: "Year", trigger: "change" }],
	change: row => {  console.log(row);  }
}, {
	type: "Date", label: "年月日", value: "date",
        rules: [{ required: true, message: "Year", trigger: "change" }],
	change: row => {   console.log(row);   }
}, {
	type: "DateRange", label: "时间区间", value: "dateRange",
        rules: [{ required: true, message: "Year", trigger: "change" }],
	change: row => {   console.log(row);  }
}
```
### 自定义扩展表单组件
```html
<cheers-form slot="body" :inline="false" labelWidth="100px" ref="formrow" :ruleFormBtn="ruleFormBtn"
	:ruleForm="ruleForm" :fieldList="fieldList" @f_listenBtn="f_listenBtn" @f_save="f_save">
	<template v-slot:form-avatar>
		<cheers-upload-image :previewFile='$previewFile' :uploadUrl='$uploadUrl' text='备注' v-model="ruleForm.avatar"
			:isCropper="true" :multi="2" :maxSize="10240" :width="150" :height="150">
		</cheers-upload-image>
	</template>
</cheers-form>
```
```js
{
	type: "slot", solt: "avatar", label: "图片", value: "avatar",
	// 表单验证
	rules: [{ required: true, message: "请选择图片", trigger: "change" }]
},
```
### 自定义验证和隐藏显示
```js
{
	type: "Input", label: "隐藏显示", value: "name", flag: 'this.ruleForm.numberInput == 5',
// 表单验证
	rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
},
{
	type: "Input", label: "自定义验证", value: "phone",
	rules: [{ required: true, validator: checkPhone, trigger: "blur" }]
},
```
### 完整代码
```html
<template>
	<cheers-card>
		<span slot="center">档案库</span>
		<cheers-form slot="body" :inline="false" labelWidth="100px" ref="formrow" :ruleFormBtn="ruleFormBtn"
			:ruleForm="ruleForm" :fieldList="fieldList" @f_listenBtn="f_listenBtn" @f_save="f_save">
			<template v-slot:form-avatar>
				<cheers-upload-image :previewFile='$previewFile' :uploadUrl='$uploadUrl' text='备注' v-model="ruleForm.avatar"
					:isCropper="true" :multi="2" :maxSize="10240" :width="150" :height="150">
				</cheers-upload-image>
			</template>
		</cheers-form>
	</cheers-card>
</template>
<script>
import axios from 'axios'
export default {
	data() {
		return {
			ruleForm: {
				box: []
			},
			ruleFormBtn: [],
			selectData: {
				cityData: []
			}
		};
	},
	computed: {
		fieldList() {
			return [
				{
					row: [
						{
							title: "基本信息",
							col: 12,
							list: [
								{
									type: "slot", solt: "avatar", label: "图片", value: "avatar",
									// 表单验证
									rules: [{ required: true, message: "请选择图片", trigger: "change" }]
								},
								{
									type: "NumberInput", label: "数字", value: "numberInput",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									attr: { step: 5 },
									change: row => { this.changeYear(row); }
								},
								{
									type: "Input", label: "隐藏显示", value: "name", flag: 'this.ruleForm.numberInput == 5',
									// 表单验证
									rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
								},
								{
									type: "Input", label: "输入框", value: "show",
									// 表单验证
									rules: [{ required: true, message: "请输入姓名", trigger: "blur" }]
								},
								{
									type: "Password", label: "密码框", value: "pass",
									// 表单验证
									rules: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
								},
								{
									type: "Input", label: "自定义验证", value: "phone",
									rules: [{ required: true, validator: checkPhone, trigger: "blur" }]
								},
								{
									type: "Select", label: "下拉框", value: "sex",
									// 渲染数组// 下拉转换
									options: caseState, props: { label: "label", value: "value" },
									attr: {
										clearable: true
									},
									rules: [{ required: true, message: "请选择性别", trigger: "change" }],
									change: row => { this.changeSex(row); }
								}, {
									type: "Cascader", label: "级联下拉框", value: "city",
									// 渲染数组// 下拉转换
									options: this.selectData.cityData,
									props: { label: "departName", value: "id" },
									rules: [{ required: true, message: "请选择城市", trigger: "change" }],
									change: row => { this.changeCity(row); }
								}, {
									type: "Radio", label: "单选", value: "radio",
									// 渲染数组// 下拉转换
									options: caseState,
									props: { label: "label", value: "value" }, attr: {
										border: true
									},
									rules: [{ required: true, message: "请选择性别", trigger: "change" }],
									change: row => { this.changeSex(row); }
								}, {
									type: "Checkbox", label: "复选", value: "box",
									// 渲染数组// 下拉转换
									options: caseState,
									props: { label: "label", value: "value" }, attr: {
										border: true
									},
									rules: [{ required: true, message: "请选择性别", trigger: "change" }],
									change: row => { this.changeSex(row); }
								},
								{
									type: "Year", label: "年", value: "year",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									change: row => { this.changeYear(row); }
								}, {
									type: "YearMonth", label: "年月", value: "yearMonth",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									change: row => { this.changeYear(row); }
								}, {
									type: "Date", label: "年月日", value: "date",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									change: row => { this.changeYear(row); }
								}, {
									type: "DateRange", label: "时间区间", value: "dateRange",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									change: row => { this.changeYear(row); }
								}, {
									type: "Switch", label: "开关", value: "Switch",
									rules: [{ required: true, message: "Year", trigger: "change" }],
									change: row => { this.changeYear(row); }
								},
								// {
								// 	type: "Select", label: "所属部门", value: "depart", options: [], placeholder: "请选择所属部门",
								// 	rules: [{ required: true, message: "请选择所属部门", trigger: "change" }],
								// 	change: row => "",
								// },
							],
						},
					],
				},
			];
		}
	},
	mounted() {
		this.ruleFormBtn = [
			{ title: "保存", icon: "el-icon-plus", methods: "f_validate", option: [] },
			{ title: "取消", icon: "el-icon-delete", methods: "f_cancel", option: [] }
		];
		this.f_getSelectData()
	},
	methods: {
		changeYear(row) {
			console.log(row)
		},
		changeSex(row) {
			console.log(row)
		},
		changeCity(row) {
			console.log(row)
		},
		async f_getSelectData() {
			let res = await axios.get("/json/city.json")
			this.selectData.cityData = res.data.data
		},
		//按钮回调
		f_listenBtn(methodsWords, option) {
			this[methodsWords](...option);
		},
		f_validate(val) {
			this.$refs.formrow.f_validate();
		},
		f_save(valid) {
			if (valid) {
				console.log(this.ruleForm);
			}
		},
		f_cancel(val) {
			console.log(2);
		},
	},
};
let caseState = [
	{ label: "男", value: "1" },
	{ label: "女", value: "2" },
];
let checkPhone = (rule, value, callback) => {
	if (!value) {
		return callback(new Error("手机号不能为空"));
	} else {
		const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
		if (reg.test(value)) {
			callback();
		} else {
			return callback(new Error("请输入正确的手机号"));
		}
	}
};
</script>

```
