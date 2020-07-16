<template>
	<div class="pages">
		<el-pagination v-if="paginations.totalRowNum>0" @size-change="f_sizeChange" @current-change="f_currentChange"
			:page-sizes="pageInationsConfig.pageSizes" :layout="pageInationsConfig.layout" :current-page="paginations.pageNum"
			:page-size="paginations.pageSize" :total="paginations.totalRowNum"></el-pagination>
	</div>
</template>

<script>
export default {
	name: "cheersPaginations",
	props: {
		paginations: {
			type: Object,
			default: () => {
				return {
					pageNum: 0, // 当前页
					pageSize: 10, // 1页显示多少条
					totalRowNum: 0 // 总数
				};
			}
		},
		pageInationsConfig: {
			type: Object,
			default: () => {
				return {
					layout: "total, sizes, prev, pager, next, jumper",
					pageSizes: [10, 20, 30, 50, 100]
				};
			}
		}
	},
	data() {
		return {
			paginationsData: {
				pageNum: 0, // 当前页
				pageSize: 10, // 1页显示多少条
				totalRowNum: 0 // 总数
			}
		};
	},
	watch: {
		paginations: {
			handler() {
				this.paginationsData = this.paginations;
			},
			limmediate: true
		}
	},
	methods: {
		//每页回调
		f_sizeChange(val) {
			this.paginationsData.pageSize = val;
			this.$emit("f_changPaginations", this.paginationsData);
		},
		//当前页回调
		f_currentChange(val) {
			this.paginationsData.pageNum = val;
			this.$emit("f_changPaginations", this.paginationsData);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "./css/index.scss";
</style>