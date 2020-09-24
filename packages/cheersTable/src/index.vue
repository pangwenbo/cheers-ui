<template>
	<div class="tables">
		<el-table :data="tableData" :stripe="stripe||true" :border="border||true" tooltip-effect="light"
			@selection-change="f_handleSelectionChange" :height="tableHeight" :show-summary="showSummary"
			:header-cell-style="{'background-color': '#F5F7FA',  'color': '#000',}">
			<!--多选列-->
			<el-table-column v-if="selectionShow" :key="1" type="selection" width="50" align="center" highlight-current-row>
			</el-table-column>

			<!--自定义添加排序列-->
			<!-- <el-table-column type="index" width="50"></el-table-column> -->
			<el-table-column v-if="indexShow" :key="2" align="center" :label="indexLabel" :width="indexWidth">
				<template slot-scope="scope">
					<span>{{scope.$index + 1}}</span>
				</template>
			</el-table-column>

			<!--自定义添加扩展列-->
			<el-table-column type="expand" v-if="expandShow" :key="3">
				<template slot-scope="scope">
					<template v-for="(item,index) in expandList">
						<row :key="index+'expandList'" :row="scope.row" :col="item" :render="item.render" :col-index="index" />
					</template>
				</template>
			</el-table-column>

			<!--主要内容部分-->
			<!--	{
					width: 150, //列宽
					label: "日期", //表头名字
					prop: "date", //字段名，键
					align: "right", // 列对齐方式，默认cenrter
					headerAlign: "right", // 列头对其方式，默认cenrter
					fixed: false, // 列是否固定，默认false
					sortable: true //是否开启排序默，认false
			},-->
			<template v-for="(item, index) in tableHead">
				<!-- 默认 -->
				<el-table-column :key="index+'tableHead'" v-if="!item.render&&f_show(item.showRow||true)" :label="item.label"
					:prop="item.prop" :width="item.width" :header-align="item.headerAlign||'center'" :align="item.align||'center'"
					:fixed="item.fixed||false" :sortable="item.sortable||false" :show-overflow-tooltip="true"></el-table-column>
				<!-- 自定义渲染组件或者html元素 -->
				<el-table-column :key="index+'tableHead'" v-if="item.render&&f_show(item.showRow||true)" :label="item.label"
					:prop="item.prop" :width="item.width" :header-align="item.headerAlign||'center'" :align="item.align||'center'"
					:fixed="item.fixed||false" :sortable="item.sortable||false" :show-overflow-tooltip="true">
					<template slot-scope="scope">
						<row :row="scope.row" :col="item" :render="item.render" :col-index="index" />
					</template>
				</el-table-column>
			</template>
			<!--操作列-->
			<el-table-column v-if="addBtnList" align="center" :fixed="addBtnList.fixed" :label="addBtnList.label"
				:min-width="addBtnList.width" :key="1000">
				<!-- f_show按钮权限控制 -->
				<template slot-scope="scope">
					<el-button v-for="(item,index) in addBtnList.list" :key="index+'addBtnList'"
						v-show="f_show(item.showBtn||true,scope)" @click="f_clickBtn(item.methods,scope,item.option)" type="text"
						:title="item.title">
						<i :class="item.icon"></i>
						<span>{{item.title}}</span>
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
	name: "cheersTable",
	components: {
		row: {
			functional: true,
			props: {
				row: Object,
				col: Object,
				render: Function,
				colIndex: [Number, String]
			},
			render(h, ctx) {
				const randomIndex = Math.random()
					.toString(35)
					.replace(".", "");
				const params = {
					row: { ...ctx.props.row },
					colIndex: ctx.props.colIndex || randomIndex
				};
				if (ctx.props.col) {
					params.col = ctx.props.col;
				}
				return ctx.props.render && ctx.props.render(h, params);
			}
		}
	},
	props: {
		searchForm: {
			//搜索bar，有时候需要根据这个显示和隐藏列
			type: Object,
			default: () => { }
		},
		border: {
			// 表格边框
			type: Boolean,
			default: true
		},
		stripe: {
			// 是否开启斑马纹
			type: Boolean,
			default: true
		},
		initListPermission: {
			// 权限信息
			type: Object,
			default: () => { }
		},
		tableHeight: {
			// 表格高度
			type: String,
			default: "400"
		},
		showSummary: {
			// 是否开启合计
			type: Boolean,
			default: false
		},
		expandShow: {
			// 是否显示详情扩展列
			type: Boolean,
			default: false
		},
		expandList: {
			type: Array,
			default: () => []
		},
		indexShow: {
			// 是否显示排序列
			type: Boolean,
			default: true
		},
		selectionShow: {
			// 是否显示多选列
			type: Boolean,
			default: false
		},
		indexLabel: {
			// 排序列名称
			type: String,
			default: "序号"
		},
		indexWidth: {
			// 排序列宽度
			type: String,
			default: "50"
		},
		tableHead: {
			// 表头数据
			type: Array,
			default: () => []
		},
		tableData: {
			// 表格数据
			type: Array,
			default: () => []
		},
		addBtnList: {
			// 操作列配置项
			type: Object,
			default: () => { }
		},
		buttonListShow: {
			// 是否显示操作列
			type: Boolean,
			default: true
		}
	},
	methods: {
		// 判断操作列按钮显示、隐藏
		f_show(itemshowBtn, scope) {
			console.log(itemshowBtn, eval(itemshowBtn))
			return eval(itemshowBtn);
		},
		// 操作列 按钮方法
		f_clickBtn(methodsWords, scope, option) {
			this.$emit("f_listenCall", methodsWords, scope, option);
		},
		//多选框
		f_handleSelectionChange(val) {
			this.$emit("f_handleSelectionChange", val);
		}
	}
};
</script>
<style >
.el-table {
	overflow: visible !important;
}
</style>