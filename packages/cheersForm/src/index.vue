<template>
	<el-form :inline="inline" :model="ruleForm" ref="ruleForm" :label-width="labelWidth">
		<el-row v-for="(row,index) in fieldList" :key="index+'row'">
			<cheers-form-title :bdcolor="bdcolor" :id='row.ref&&row.ref' :ref="row.ref&&row.ref" v-if="row.title"
				v-bind="row.attr">
				{{row.title}}
			</cheers-form-title>
			<el-col v-for="(col,index) in row.row" :key="index+'col'" :span="col.col" v-bind="col.attr">
				<cheers-form-title :bdcolor="bdcolor" v-if="col.title">{{col.title}}
				</cheers-form-title>
				<template v-for="item in col.list">
					<el-form-item v-if="f_show(item.flag||true)" :key="item.value" :label="item.label" :value="item.value"
						:prop="item.value" :rules="item.rules" :labelWidth="item.labelWidth">
						<!-- solt -->
						<template v-if="item.type === 'slot'">
							<slot :name="'form-' + item.solt" />
						</template>
						<!--  数字 文本框 下拉框 动态表单 -->
						<div v-if="item.type === 'Dynamic'">
							<table id="info" border="">
								<tr class="title">
									<td v-for="dynamicItems in item.tableHead" :key="dynamicItems.label">{{dynamicItems.label}}</td>
									<td class="handle_">操作</td>
								</tr>
								<tr class="wraps_" v-for="(row, indexs) in ruleForm[item.value]" :key="row.indexs">
									<td v-for="(dynamicItem,ids) in item.formItem" :key="ids+dynamicItem">
										<el-form-item :prop="item.value+'.' + indexs + '.'+dynamicItem.value" :rules="dynamicItem.rules">
											<el-input-number v-if="dynamicItem.type === 'NumberInput'"
												@change="dynamicItem.change && dynamicItem.change(ruleForm[item.value][indexs][dynamicItem.value])"
												v-model="ruleForm[item.value][indexs][dynamicItem.value]" v-bind="dynamicItem.attr" />
											<el-input v-if="dynamicItem.type==='Input'"
												@change="dynamicItem.change && dynamicItem.change(ruleForm[item.value][indexs][dynamicItem.value])"
												v-model="ruleForm[item.value][indexs][dynamicItem.value]" style="border:none"
												v-bind="dynamicItem.attr" />
											<el-select v-if="dynamicItem.type === 'Select'"
												v-model="ruleForm[item.value][indexs][dynamicItem.value]" @visible-change="$forceUpdate()"
												v-bind="dynamicItem.attr"
												@change="dynamicItem.change && dynamicItem.change(ruleForm[item.value][indexs][dynamicItem.value])">
												<el-option v-for=" childItem in dynamicItem.options" :label="childItem[dynamicItem.props.label]"
													:value="childItem[dynamicItem.props.value]" :key="childItem[dynamicItem.props.value]" />
											</el-select>
										</el-form-item>
									</td>
									<td>
										<el-button type="text" @click.prevent="removerow(indexs,item.value)">删除</el-button>
									</td>
								</tr>
								<tr class="wraps_">
									<td :colspan="item.tableHead.length+1" @click="addrow(item.value)">
										<el-button type="text">增加一行</el-button>
									</td>
								</tr>
							</table>
						</div>
						<!-- 输入框-->
						<el-input v-if="item.type==='Input'" v-model="ruleForm[item.value]"
							:placeholder="item.placeholder||'请输入'+item.label" v-bind="item.attr" />
						<!-- 文本域-->
						<el-input v-if="item.type==='Textarea'" type="textarea" v-model="ruleForm[item.value]"
							:placeholder="item.placeholder||'请输入'+item.label" v-bind="item.attr">
						</el-input>
						<!-- 密码框 -->
						<el-input v-if="item.type === 'Password'" v-model="ruleForm[item.value]"
							:show-password="item.type === 'Password'" :placeholder="item.placeholder||'请输入'+item.label"
							v-bind="item.attr" />
						<el-input-number v-if="item.type === 'NumberInput'"
							@change="item.change && item.change(ruleForm[item.value])" v-model="ruleForm[item.value]"
							v-bind="item.attr" />
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
		<el-form-item label-width="0">
			<div style="width:100%;text-align:center">
				<el-button v-for="(item, index) in ruleFormBtn" :key="index+'formBtn'"
					@click="f_clickBtn(item.methods,item.option)" type="primary">
					<i :class="item.icon"></i>
					<span>{{item.title}}</span>
				</el-button>
			</div>
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
		removerow(index, value) {
			this.ruleForm[value].splice(index, 1);
		},
		addrow(value) {
			this.ruleForm[value].push({});
		},
		f_show(flag) {
			return eval(flag);
		},
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
<style lang="scss" scoped>
#info {
	border-collapse: collapse;
	border: none;
	width: 100%;
	text-align: center;
	.title {
		background: #f9fafc;
		font-size: 12px;
		.handle_ {
			width: 100px;
		}
	}
	.wraps_ {
		tr {
			height: 40px;
		}
	}
	tr {
		height: 40px;
		line-height: 40px;
	}
	tr {
		border: solid #eeeeee 1px;
	}
}
</style>