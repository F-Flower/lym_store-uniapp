<template>
	<view class="search-top px-2 d-flex j-sb a-center">
		<slot name="left">123</slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		name: "search-slot",
		data() {
			return {

			};
		}
	}
</script>

<style>
	.search-top {
		height: 88rpx;
		/* background-color: #eee; */
	}
</style>
