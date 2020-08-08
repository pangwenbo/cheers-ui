<template>
	<div>
		<cheers-table :tableHeight="tableHeight" :tableData="tableData" :tableHead="tableHead" :selectionShow="true"
			:expandShow="true" :showSummary="true" :expandList="expandList" :addBtnList="addBtnList"
			@f_listenCall="f_listenCall" @f_handleSelectionChange="f_handleSelectionChange"></cheers-table>

		<cheers-upload-file @readyUpload="f_uploadLoading" :fileUpload='fileUpload' @overUpload="f_loadingOver"
			:dataFile="fileListName" :dataFileNum="fileNum"></cheers-upload-file>

		<cheers-upload-image :previewFile='previewFile' :uploadUrl='fileUpload' :text='text' v-model="pic"
			:isCropper="false" :multi="2" :maxSize="10240" :width="150" :height="150">
		</cheers-upload-image>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tableHeight: "400", // 表格高度
			tableHead: [], // 表头数据
			tableData: [], // 表格数据
			addBtnList: {}, // 操作列数据
			expandList: [], //扩展列数据
			fileListName: [],
			pic: "",
			loading: false,
			fileNum: 8,
			fileUpload: "http://39.106.141.151:20000/api/file/files/local/upload",
			text: "备注",
			previewFile: "http://39.106.141.151:20000/api/file/files/"
		};
	},
	mounted() {
		let that = this;
		//扩展列数据
		this.expandList = [
			{
				render(h, params) {
				}
			}
		];
		//表头数据
		this.tableHead = [
			{
				width: 150, //列宽
				label: "日期", //表头名字
				prop: "date", //字段名，键
				align: "right", // 列对齐方式，默认cenrter
				headerAlign: "right", // 列头对其方式，默认cenrter
				fixed: false, // 列是否固定，默认false
				sortable: true //是否开启排序默，认false
			},
			{
				width: 150,
				label: "姓名",
				prop: "name",
			},
			{
				prop: "address",
				label: "地址",
				sortable: true,
			},
			{
				prop: "money",
				label: "今日营业额",
				sortable: true,
			}
		];

		this.tableData = [
			{
				date: "2016-05-02",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄",
				href: "https://www.baidu.com/?tn=78040160_15_pg&ch=13",
				shop: "王小虎大盘鸡",
				shopId: "123",
				money: "8888"
			},
			{
				date: "2016-05-04",
				name: "张小虎",
				address: "上海市普陀区金沙江路 1517 弄",
				href: "https://www.baidu.com/?tn=78040160_15_pg&ch=13",
				shop: "张小虎海底捞",
				shopId: "124",
				money: "9999"
			},
			{
				date: "2016-05-01",
				name: "李小虎",
				address: "上海市普陀区金沙江路 1519 弄",
				href: "https://www.baidu.com/?tn=78040160_15_pg&ch=13",
				shop: "李小虎洗脚城",
				shopId: "125",
				money: "10000"
			}
		];
		this.addBtnList = {
			label: "操作",
			width: 200,
			list: [
				{
					title: "编辑",
					icon: "el-icon-edit",
					methods: "f_edit",
					option: ["id", "query"], //参数扩展
					showBtn: true
				},
				{
					title: "删除",
					icon: "el-icon-delete",
					methods: "f_del",
					option: ["id", "query"],
					showBtn: "scope.row.address=='上海市普陀区金沙江路 1518 弄'" // 根据表格状态显示隐藏按钮
				}
			]
		};
	},
	methods: {
		// 操作列按钮方法
		f_listenCall(methodsWords, scope, option) {
			this[methodsWords](scope, ...option);
		},
		// 调用编辑方法
		f_edit(scope, id, query) {
			console.log(scope, id, query);
			alert("编辑");
		},
		// 调用删除方法
		f_del(scope, id, query) {
			console.log(scope, id, query);
			alert("删除");
		},
		//多选框
		f_handleSelectionChange(val) {
			console.log(val);
		},
		//测试自定义渲染button的click事件
		f_alert(data) {
			alert(data);
		},
		f_uploadLoading(isLoading) {
			this.loading = isLoading;
		},
		f_loadingOver(isLoading, fileListName) {
			console.log(isLoading, fileListName, "文件上传组件00000---");
			this.loading = isLoading;
			this.fileListName = fileListName;
		},
	},
	filters: {
		money(val) {
			return val + "元";
		}
	}
};
</script>