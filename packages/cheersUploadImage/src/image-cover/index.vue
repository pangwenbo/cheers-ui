<template>
	<div class="thumb" :style="thumbStyle" :class="{'gray': isGray}">
		<div class="thumb-img" :class="imageStyle" :style="{ backgroundImage: 'url(' + thumbSrc + ')' }"></div>
	</div>
</template>
<script>
export default {
	props: {
		width: {
			type: String,
			default: "100%"
		},
		height: {
			type: String,
			default: "100%"
		},
		thumb: String,
		styleType: {
			type: String,
			default: "square" // circle
		},
		sizeType: {
			type: String,
			default: "cover" // contain
		},
		isGray: {
			type: Boolean,
			default: false
		},
		border: {
			type: String,
			default: "none"
		},
		previewFile: {
			type: String,
			default: () => ''
		}
	},
	created() {
		// console.log('this.thumb=====',this.thumb)
	},
	mounted() { },
	data() {
		return {};
	},
	computed: {
		thumbStyle() {
			return {
				width: this.width,
				height: this.height,
				border: this.border
			};
		},
		thumbSrc() {
			return this.previewFile + this.thumb;
		},
		imageStyle() {
			const classes = `${this.styleType} ${this.sizeType}-size`;
			return classes;
		}
	},
	methods: {
		fullImagePath(uri) {
			if (uri) {
				if (
					uri.indexOf("http") === 0 ||
					uri.indexOf("../") === 0 ||
					uri.indexOf("data:") === 0
				) {
					return uri;
				} else {
					return uri;
				}
			} else {
				return "";
			}
		}
	},
	components: {}
};
</script>
<style scope>
@import "../css/index.less";
</style>
