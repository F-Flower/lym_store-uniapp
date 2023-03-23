<template>
	<view class="d-flex a-center">
		<view class="new pb-1">
			<slot name="newprice"></slot>
		</view>
		<view class="old">
			<slot name="oldprice"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "p-price",
		data() {
			return {

			};
		}
	}
</script>

<style scoped>
	.new {
		font-size: 34rpx;
		color: #f60;
		font-weight: 700;
	}

	.old {
		text-decoration: line-through;
		color: #ccc;
		margin-left: 20rpx;
	}
</style>
