<template>
	<div style="margin-bottom:50px;min-width:1000px">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="16">
				<div class="index">
					<div class="title">
						<!-- 标题插槽 -->
						<div style="float:left">
							<slot name="title"></slot>
						</div>
						<span style="margin:0 auto">
							<slot name="center"></slot>
						</span>
						<div style class="title-right">
							<slot name="title-right">
								<span>标记</span>
								<span style="color:red">*</span>
								<span>未必填项</span>
							</slot>
						</div>
					</div>
					<!-- 内容插槽 -->
					<slot name="body"></slot>
					<div class="footer">
						<!-- 底部按钮插槽 -->
						<slot name="footer"></slot>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
	name: "cheersCard"
}
</script>
<style lang="scss" scoped>
.index {
	border: 1px solid #f2f2f2;
	color: #606266;
	padding: 0 20px 20px 20px;
	.title {
		width: 100%;
		padding: 10px 5px;
		border-bottom: 1px solid #f2f2f2;
		font-size: 14px;
		height: 20px;
		text-align: center;
		overflow: hidden;
		.title-right {
			float: right;
			color: #48535d;
			font-size: 13px;
		}
	}
	.footer {
		margin: 0 auto;
		text-align: center;
		margin-top: 10px;
	}
}
</style>