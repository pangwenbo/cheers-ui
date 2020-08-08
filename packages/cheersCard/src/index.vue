<template>
	<div style="margin-bottom:50px;min-width:1000px">
		<el-row>
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
@import "./css/index.scss";
</style>