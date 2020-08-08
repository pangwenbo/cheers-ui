
<template>
	<div>
		<table id="info" border="">
			<tr class="title">
				<td v-for="item in tableHead" :key="ruleKey+item">{{item}}</td>
				<td class="handle_">操作</td>
			</tr>
			<tr class="wraps_" v-for="(row, indexs) in tableDataList" :key="row.key">
				<td v-for="(item,ids) in tableHead" :key="ids+item">
					<el-form-item :prop="ruleKey+'.' + indexs + '.'+Object.keys(row)[ids]"
						:rules="{required: true, message: item+'不能为空', trigger: 'blur'}">
						<el-input v-model="row[Object.keys(row)[ids]]" style="border:none" />
					</el-form-item>
				</td>
				<td>
					<el-button type="text" @click.prevent="removerow(indexs)">删除</el-button>
				</td>
			</tr>
			<tr class="wraps_">
				<td :colspan="tableHead.length+1" @click="addrow">
					<el-button type="text">增加一行</el-button>
				</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: "cheersDynamicTable",
	props: {
		// 表头
		tableHead: {
			type: Array,
			default: () => []
		},
		// table 数据
		tableDataList: {
			type: Array,
			default: () => []
		},
		ruleKey: {
			type: String,
			default: ""
		}
	},
	methods: {
		removerow(index) {
			this.tableDataList.splice(index, 1);
		},
		addrow() {
			this.tableDataList.push({
				timeStage: "",//时间
				school: "",//学校
				professional: "",//专业
				certificate: "",// 证书
				key: Date.now()
			});
		}

	}
};
</script>
<style  scoped>
@import "./css/index.scss";
::v-deep .el-input__inner {
	border: none;
}
</style>