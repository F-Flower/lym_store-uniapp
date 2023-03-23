<template>
	<view>
		<view class="pl-2 pb-1 font-weight font-md" v-if="title">{{title}}</view>
		<view v-if="cover">
			<image :src="cover" mode="widthFix" class="w-100"></image>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "one-adv",
		data() {
			return {

			};
		},
		props: {
			title: {
				type: String
			},
			cover: {
				type: String
			}
		}
	}
</script>

<style scoped>
	/* .box-img {
		height: 150px;
		position: relative;
		overflow: hidden;
	}

	.one-img {
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	} */
</style>
