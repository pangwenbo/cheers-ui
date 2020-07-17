<template>
	<el-form :inline="inline" :model="ruleForm" :rules="rules" ref="ruleForm" :label-width="labelWidth">
		<el-row v-for="(row,index) in fieldList" :key="index+'row'">
			<el-col v-for="(col,index) in row.row" :key="index+'col'" :span="col.col">
				<cheerFormTitle :bdcolor="bdcolor" v-if="col.title">{{col.title}}</cheerFormTitle>
				<el-form-item v-for="item in col.list" :label="item.label" :key="item.value" :value="item.value"
					:prop="item.value">
					<!-- solt -->
					<template v-if="item.type === 'slot'">
						<slot :name="'form-' + item.solt" />
					</template>
					<!-- 输入框||密码框 -->
					<el-input v-if="item.type === 'Input'||item.type==='Password'" v-model="ruleForm[item.value]"
						:show-password="item.type === 'Password'" :placeholder="item.placeholder||'请输入'+item.label"
						:disabled="item.disabled || false" />
					<!--下拉框  $forceUpdate() 下拉刷新,修复数据改变下拉框不变的bug -->
					<el-select v-if="item.type === 'Select'" v-model="ruleForm[item.value]" @visible-change="$forceUpdate()"
						:disabled="item.disabled || false" :placeholder=" item.placeholder||'请选择'+item.label"
						@change="item.change && item.change(ruleForm[item.value])">
						<el-option v-for=" childItem in item.options" :label="childItem[item.props.label]"
							:value="childItem[item.props.value]" :key="childItem[item.props.value]" />
					</el-select>
					<!-- 三级联动 cascader -->
					<el-cascader v-if="item.type === 'Cascader'" :options="item.props.options" v-model="ruleForm[item.value]"
						:placeholder="item.placeholder ||'请选择'+item.label" :disabled="item.disabled || false" style="width: 100%;"
						:props="item.props" @change="item.change &&item.change(searchForm[item.value])" />
					<!-- 单选 -->
					<el-radio-group v-if="item.type === 'Radio'" v-model="ruleForm[item.value]">
						<el-radio v-for="childItem in item.options" :label="childItem[item.props.label]"
							:value="childItem[item.props.value]" :key="childItem[item.props.value]"
							:disabled="item.disabled || false" />
					</el-radio-group>
					<!-- 组合单选按钮 -->
					<el-radio-group v-if="item.type === 'RadioButton'" v-model="ruleForm[item.value]"
						@change="item.change && item.change(ruleForm[item.value])">
						<el-radio-button v-for="childItem in item.options" :label="childItem[item.props.label]"
							:value="childItem[item.props.value]" :key="childItem[item.props.value]"
							:disabled="item.disabled || false" />
					</el-radio-group>
					<!-- 复选框 -->
					<el-checkbox-group v-if="item.type === 'Checkbox'" v-model="ruleForm[item.value]">
						<el-checkbox v-for="childItem in item.options" :label="childItem[item.props.label]"
							:value="childItem[item.props.value]" :key="childItem[item.props.value]"
							:disabled="item.disabled || false" />
					</el-checkbox-group>
					<!-- Year -->
					<el-date-picker v-if="item.type === 'Year'" v-model="ruleForm[item.value]" format="yyyy"
						:disabled="item.disabled || false" @change="item.change && item.change(ruleForm[item.value])"
						:placeholder="item.placeholder||'请选择'+item.label" />
					<!-- YearMonth -->
					<el-date-picker v-if="item.type === 'YearMonth'" v-model="ruleForm[item.value]" format="yyyy-MM"
						:disabled="item.disabled || false" @change="item.change && item.change(ruleForm[item.value])"
						:placeholder="item.placeholder||'请选择'+item.label" />
					<!-- 日期 -->
					<el-date-picker v-if="item.type === 'Date'" v-model="ruleForm[item.value]" format="yyyy-MM-dd"
						:disabled="item.disabled || false" @change="item.change && item.change(ruleForm[item.value])"
						:placeholder="item.placeholder||'请选择'+item.label" />
					<!-- 日期时间 -->
					<el-date-picker v-if="item.type === 'DateTime'" type="datetime" v-model="ruleForm[item.value]"
						:placeholder="item.placeholder||'请选择'+item.label" format="yyyy-MM-dd hh:mm:ss"
						:disabled="item.disabled || false" @change="item.change && item.change(ruleForm[item.value])" />
					<!-- 时间 -->
					<el-time-select v-if="item.type === 'Time'" v-model="ruleForm[item.value]"
						:placeholder="item.placeholder||'请选择'+item.label" :disabled="item.disabled || false"
						@change="item.change && item.change(ruleForm[item.value])" />
					<!-- 起止时间 -->
					<el-date-picker v-if="item.type === 'DateRange'" v-model="ruleForm[item.value]" type="daterange"
						start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
						@change="item.change && item.change(ruleForm[item.value])" :disabled="item.disabled || false" />
					<!-- 滑块 -->
					<el-slider v-if="item.type === 'Slider'" v-model="ruleForm[item.value]" :disabled="item.disabled || false" />
					<!-- 开关 -->
					<el-switch v-if="item.type === 'Switch'" v-model="ruleForm[item.value]" :disabled="item.disabled || false" />

				</el-form-item>
			</el-col>
		</el-row>
		<el-form-item>
			<el-button v-for="(item, index) in ruleFormBtn" :key="index+'formBtn'"
				@click="f_clickBtn(item.methods,item.option)" type="primary">
				<i :class="item.icon"></i>
				<span>{{item.title}}</span>
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import cheersFormTitle from "../../cheersFormTitle/src/index.vue";
export default {
	name: "cheersForm",
	components: {
		cheersFormTitle,
	},
	props: {
		bdcolor: {
			type: String,
			default: "#409EFF"
		},
		inline: {
			type: Boolean,
			default: true
		},
		isHandle: {
			type: Boolean,
			default: true
		},
		labelWidth: {
			type: String,
			default: "120px"
		},
		ruleFormBtn: {//表单按钮
			type: Array,
			default: () => []
		},
		fieldList: {//表单项
			type: Array,
			default: () => []
		},
		ruleForm: {//表单数据
			type: Object,
			default: () => { }
		}
	},
	computed: {
		// 解析表单的正则验证
		rules() {
			let rules = {}
			for (let item of this.fieldList) {
				for (let item1 of item.row) {
					for (let item2 of item1.list) {
						rules[item2.value] = item2.rules
					}
				}

			}
			return rules;
		}
	},
	methods: {
		// 操作列 按钮方法
		f_clickBtn(methodsWords, option) {
			this.$emit("f_listenBtn", methodsWords, option);
		},
		f_resetForm() {
			this.$refs.ruleForm.resetFields();
		},
		f_validate() {
			this.$refs.ruleForm.validate((valid) => {
				this.$emit("f_save", valid)
			});
		}
	},
};
</script>