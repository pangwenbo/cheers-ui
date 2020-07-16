<template>
	<div class="cheersFormTitle" :style="{ borderLeftColor: bdcolor }">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "cheersFormTitle",
	props: {
		bdcolor: {
			type: String,
			default: "#409EFF"
		},
	},
}
</script>
<style scoped>
@import "./css/index.scss";
</style>