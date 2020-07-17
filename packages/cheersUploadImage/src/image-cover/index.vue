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
			}
		},
		created() {
			// console.log('this.thumb=====',this.thumb)
		},
		mounted() {},
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
				return this.$previewFile + this.thumb;
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
<style>
	.thumb {
		margin-right: 50px;
	}
	.thumb-img {
		width: 100%;
		height: 100%;
		background-position: center center;
		background-repeat: no-repeat;
	}
	.cover-size {
		background-size: cover;
	}
	.contain-size {
		background-size: contain;
	}
	.square {
		border-radius: 0;
	}
	.circle {
		border-radius: 50%;
	}
	.gray {
		filter: Gray;
		-webkit-filter: grayscale(100%);
	}
</style>
