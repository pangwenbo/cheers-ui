<template>
	<div class="search_input">
		<el-form :inline="inline" :model="searchForm" ref="searchForm" class="demo-form-inline" :label-width="labelWidth">
			<el-form-item v-for="item in fieldList" :key="item.value" :label="item.label" :value="item.value"
				:labelWidth="item.labelWidth" :prop="item.value">
				<!-- solt -->
				<template v-if="item.type === 'slot'">
					<slot :name="'form-' + item.solt" />
				</template>
				<!-- 输入框||密码框 -->
				<el-input v-if="item.type === 'Input'||item.type==='Password'" v-model="searchForm[item.value]"
					:show-password="item.type === 'Password'" :placeholder="item.placeholder||'请输入'+item.label"
					v-bind="item.attr" />
				<el-input-number v-if="item.type === 'NumberInput'" v-model="searchForm[item.value]" v-bind="item.attr" />
				<!--下拉框  $forceUpdate() 下拉刷新,修复数据改变下拉框不变的bug -->
				<el-select v-if="item.type === 'Select'" v-model="searchForm[item.value]" @visible-change="$forceUpdate()"
					:placeholder=" item.placeholder||'请选择'+item.label" v-bind="item.attr"
					@change="item.change && item.change(searchForm[item.value])">
					<el-option v-for=" childItem in item.options" :label="childItem[item.props.label]"
						:value="childItem[item.props.value]" :key="childItem[item.props.value]" />
				</el-select>
				<!-- 三级联动 cascader -->
				<el-cascader v-if="item.type === 'Cascader'" :options="item.options" v-model="searchForm[item.value]"
					:placeholder="item.placeholder ||'请选择'+item.label" :props="item.props"
					@change="item.change &&item.change(searchForm[item.value])" v-bind="item.attr" />
				<!-- 单选 -->
				<el-radio-group v-if="item.type === 'Radio'" v-model="searchForm[item.value]"
					@change="item.change &&item.change(searchForm[item.value])">
					<el-radio v-for="childItem in item.options" :label="childItem[item.props.value]"
						:key="childItem[item.props.value]" v-bind="item.attr">
						{{childItem[item.props.label]}}
					</el-radio>
				</el-radio-group>
				<!-- 复选框 -->
				<el-checkbox-group v-if="item.type === 'Checkbox'" v-model="searchForm[item.value]"
					@change="item.change &&item.change(searchForm[item.value])">
					<el-checkbox v-for="childItem in item.options" :key="childItem[item.props.value]"
						:label="childItem[item.props.value]" v-bind="item.attr">{{childItem[item.props.label]}}
					</el-checkbox>
				</el-checkbox-group>
				<!-- Year -->
				<el-date-picker v-if="item.type === 'Year'" type="year" v-model="searchForm[item.value]" value-format="yyyy"
					format="yyyy" @change="item.change && item.change(searchForm[item.value])"
					:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
				<!-- YearMonth -->
				<el-date-picker v-if="item.type === 'YearMonth'" type="month" v-model="searchForm[item.value]"
					value-format="yyyy-MM" format="yyyy-MM" @change="item.change && item.change(searchForm[item.value])"
					:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
				<!-- 日期 -->
				<el-date-picker v-if="item.type === 'Date'" v-model="searchForm[item.value]" value-format="yyyy-MM-dd"
					format="yyyy-MM-dd" @change="item.change && item.change(searchForm[item.value])"
					:placeholder="item.placeholder||'请选择'+item.label" v-bind="item.attr" />
				<!-- 日期时间 -->
				<el-date-picker v-if="item.type === 'DateTime'" type="datetime" v-model="searchForm[item.value]"
					:placeholder="item.placeholder||'请选择'+item.label" value-format="yyyy-MM-dd hh:mm:ss"
					@change="item.change && item.change(searchForm[item.value])" v-bind="item.attr" />
				<!-- 起止时间 -->
				<el-date-picker v-if="item.type === 'DateRange'" v-model="searchForm[item.value]" type="daterange"
					start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
					@change="item.change && item.change(searchForm[item.value])" v-bind="item.attr" />
				<!-- 开关 -->
				<el-switch v-if="item.type === 'Switch'" v-model="searchForm[item.value]"
					@change="item.change && item.change(searchForm[item.value])" v-bind="item.attr" />
			</el-form-item>
			<el-form-item v-for="(item, index) in searchFormBtn" :key="index+'searchFormBtn'">
				<el-button v-show="f_show(item.showBtn)" @click="f_clickBtn(item.methods,item.option)" type="primary">
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "cheersSearchBar",
	props: {
		initListPermission: {
			// 权限信息
			type: Object,
			default: () => { }
		},
		inline: {
			type: Boolean,
			default: true
		},
		labelWidth: {
			type: String,
			default: "120px"
		},
		searchFormBtn: {//表按钮
			type: Array,
			default: () => []
		},
		fieldList: {//表单项
			type: Array,
			default: () => []
		},
		searchForm: {//表单数据
			type: Object,
			default: () => { }
		}
	},
	methods: {
		// 判断操作列按钮显示、隐藏
		f_show(itemshowBtn, scope) {
			return eval(itemshowBtn);
		},
		// 操作列 按钮方法
		f_clickBtn(methodsWords, option) {
			this.$emit("f_listenBtn", methodsWords, option);
		},
		f_resetForm() {
			this.$refs.searchForm.resetFields();
		}
	},
};
</script>