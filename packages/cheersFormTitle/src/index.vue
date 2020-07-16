<template>
	<div class="cheersFormTitle">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "cheersFormTitle"
}
</script>
<style scoped>
.cheersFormTitle {
	font-size: 14px;
	margin: 30px 10px 20px 0;
	padding-left: 10px;
	border-left: 4px solid #f2f2f2;
}
</style>