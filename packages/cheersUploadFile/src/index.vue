<template>
	<el-upload class="upload-demo" :action="fileUpload" :on-preview="f_handlePreview" :on-remove="f_handleRemove"
		:before-remove="f_beforeRemove" multiple :accept="acceptNum" :limit="dataFileNum" :before-upload="f_beforeUpload"
		:on-exceed="f_handleExceed" :file-list="fileListName">
		<el-button size="small" type="default" icon="el-icon-upload">点击上传</el-button>
		<div slot="tip" class="el-upload__tip">大小不超过10M</div>
	</el-upload>
</template>

<script>
export default {
	name: "cheersUploadFile",
	props: {
		dataFile: {
			type: Array,
			default: function () {
				return [];
			}
		},
		dataFileNum: {
			type: Number,
			default: function () {
				return 1;
			}
		},
		// 上传数量
		acceptNum: {
			type: String,
			default: function () {
				return "*";
			}
		},
		//文件上传地址
		fileUpload: {
			type: String,
			default: () => ""
		}
	},
	data() {
		return {
			loading: false,
			fileUrl: "",
			fileList: []
		};
	},
	created() {
		this.fileUrl = window.fileUrl;
	},
	computed: {
		fileListName() {
			var that = this;
			if (this.dataFile && this.dataFile.length > 0) {
				var arr = [],
					arrList = [];
				for (var i = 0; i < that.dataFile.length; i++) {
					var objDataFile = {},
						obj = {};
					objDataFile.id = that.dataFile[i].fileName;
					objDataFile.url = that.dataFile[i].filePath;
					objDataFile.name = that.dataFile[i].originName;
					arr.push(objDataFile);
				}
				this.fileList = [];
				this.fileList = this.dataFile;
				return arr;
			} else {
				this.fileList = [];
				return [];
			}
		}
	},
	methods: {
		// 文件上传前
		f_beforeUpload(file) {
			console.log(file, "上传前");
			// this.$emit("readyUpload", true);
			this.f_uploadFile(file);
		},
		//上传
		f_uploadFile(file) {
			console.log(this.$http)
			var fd = new FormData();
			var that = this;
			fd.append("file", file);
			let config = {
				headers: { "Content-Type": "multipart/form-data" }
			}; //添加请求头
			this.$http.post(this.fileUpload, fd, config).then(
				response => {
					if (response.body.errorCode == 0) {
						var objDataFile = {};
						objDataFile.filePath = response.body.data.fileUrl;
						objDataFile.fileName = response.body.data.fileName;
						objDataFile.originName = response.body.data.orgFileName;
						that.fileList.push(objDataFile);
						that.$emit("overUpload", false, that.fileList);
					}
				},
				response => {
					console.log("上传失败");
				}
			);
		},
		f_handleRemove(file, fileListRemove) {
			var arr = [];
			console.log(fileListRemove, "删除后得数组");
			if (fileListRemove.length > 0) {
				for (var i = 0; i < fileListRemove.length; i++) {
					var obj = {};
					// 向后台传递的字段
					obj.filePath = fileListRemove[i].url;
					obj.fileName = fileListRemove[i].id;
					obj.originName = fileListRemove[i].name;
					arr.push(obj);
				}
			} else {
				arr = [];
			}
			this.$emit("overUpload", false, arr);
			file.status = "success";
		},
		f_handlePreview(file) {
			// console.log(file);
		},
		f_handleExceed(files, fileList) {
			this.$message.warning(
				`当前限制选择 ${this.dataFileNum} 个文件，本次选择了 ${
				files.length
				} 个文件，共选择了 ${files.length + fileList.length} 个文件`
			);
		},
		f_beforeRemove(file, fileList) {
			return this.$confirm(`确定移除 ${file.name}？`);
		}
	}
};
</script>

