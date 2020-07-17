<template>
	<el-form :inline="inline" :model="ruleForm" ref="ruleForm" :label-width="labelWidth">
		<el-row v-for="(row,index) in fieldList" :key="index+'row'">
			<el-col v-for="(col,index) in row.row" :key="index+'col'" :span="col.col">
				<cheers-form-title :bdcolor="bdcolor" v-if="col.title">{{col.title}}</cheers-form-title>
				<template v-for="item in col.list">
					<el-form-item v-if="f_show(item.flag||true)" :key="item.value" :label="item.label" :value="item.value"
						:prop="item.value" :rules="item.rules">
						<!-- solt -->
						<template v-if="item.type === 'slot'">
							<slot :name="'form-' + item.solt" />
						</template>
						<!-- 输入框-->
						<el-input v-if="item.type==='Input'" v-model="ruleForm[item.value]"
							:placeholder="item.placeholder||'请输入'+item.label" v-bind="item.attr" />
						<!-- 密码框 -->
						<el-input v-if="item.type === 'Password'" v-model="ruleForm[item.value]"
							:show-password="item.type === 'Password'" :placeholder="item.placeholder||'请输入'+item.label"
							v-bind="item.attr" />
						<el-input-number v-if="item.type === 'NumberInput'" v-model="ruleForm[item.value]" v-bind="item.attr" />
						<!--下拉框  $forceUpdate() 下拉刷新,修复数据改变下拉框不变的bug -->
						<el-select v-if="item.type === 'Select'" v-model="ruleForm[item.value]" @visible-change="$forceUpdate()"
							:placeholder=" item.placeholder||'请选择'+item.label" v-bind="item.attr"
							@change="item.change && item.change(ruleForm[item.value])">
							<el-option v-for=" childItem in item.options" :label="childItem[item.props.label]"
								:value="childItem[item.props.value]" :key="childItem[item.props.value]" />
						</el-select>
						<!-- 三级联动 cascader -->
						<el-cascader v-if="item.type === 'Cascader'" :options="item.options" v-model="ruleForm[item.value]"
							:placeholder="item.placeholder ||'请选择'+item.label" :props="item.props"
							@change="item.change &&item.change(ruleForm[item.value])" v-bind="item.attr" />
						<!-- 单选 -->
						<el-radio-group v-if="item.type === 'Radio'" v-model="ruleForm[item.value]"
							@change="item.change &&item.change(ruleForm[item.value])">
							<el-radio v-for="childItem in item.options" :label="childItem[item.props.value]"
								:key="childItem[item.props.value]" v-bind="item.attr">
								{{childItem[item.props.label]}}
							</el-radio>
						</el-radio-group>
						<!-- 复选框 -->
						<el-checkbox-group v-if="item.type === 'Checkbox'" v-model="ruleForm[item.value]"
							@change="item.change &&item.change(ruleForm[item.value])">
							<el-checkbox v-for="childItem in item.options" :key="childItem[item.props.value]"
								:label="childItem[item.props.value]" v-bind="item.attr">{{childItem[item.props.label]}}
							</el-checkbox>
						</el-checkbox-group>
						<!-- Year -->
						<el-date-picker v-if="item.type === 'Year'" type="year" v-model="ruleForm[item.value]" value-format="yyyy"
							format="yyyy" @change="item.change && item.change(ruleForm[item.value])"
							:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
						<!-- YearMonth -->
						<el-date-picker v-if="item.type === 'YearMonth'" type="month" v-model="ruleForm[item.value]"
							value-format="yyyy-MM" format="yyyy-MM" @change="item.change && item.change(ruleForm[item.value])"
							:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
						<!-- 日期 -->
						<el-date-picker v-if="item.type === 'Date'" v-model="ruleForm[item.value]" value-format="yyyy-MM-dd"
							format="yyyy-MM-dd" @change="item.change && item.change(ruleForm[item.value])"
							:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
						<!-- 日期时间 -->
						<el-date-picker v-if="item.type === 'DateTime'" type="datetime" v-model="ruleForm[item.value]"
							:placeholder="item.placeholder||'请选择'+item.label" value-format="yyyy-MM-dd hh:mm:ss"
							@change="item.change && item.change(ruleForm[item.value])" v-bind="item.attr" />
						<!-- 起止时间 -->
						<el-date-picker v-if="item.type === 'DateRange'" v-model="ruleForm[item.value]" type="daterange"
							start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
							@change="item.change && item.change(ruleForm[item.value])" v-bind="item.attr" />
						<!-- 开关 -->
						<el-switch v-if="item.type === 'Switch'" v-model="ruleForm[item.value]"
							@change="item.change && item.change(ruleForm[item.value])" v-bind="item.attr" />
					</el-form-item>
				</template>
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
import cheersFormTitle from '../../cheersFormTitle/src/index'
export default {
	components: {
		cheersFormTitle,
	},
	name: "cheersForm",
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