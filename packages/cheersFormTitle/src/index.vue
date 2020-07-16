<template>
	<div class="cheersFormTitle" :style="{ borderLeftColor: backgroundColor }">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "cheersFormTitle",
	props: {
		borderLeftColor: {
			type: String,
			default: "#409EFF"
		},
	},
}
</script>
<style scoped>
@import "./css/index.scss";
</style>