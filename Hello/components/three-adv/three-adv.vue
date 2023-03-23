<template>
	<view class="three-adv d-flex">
		<view class="w-50 d-flex flex-1">
			<image :src="section.data[0].src" mode="" style="height: 460rpx;"></image>
		</view>
		<view class="w-50 d-flex flex-column" style="height: 460rpx;">
			<image :src="section.data[1].src" style="width: 375rpx;">
			</image>
			<image :src="section.data[2].src" style="width: 375rpx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "three-adv",
		data() {
			return {

			};
		},
		props: {
			section: {
				type: Object
			}
		}
	}
</script>

<style>

</style>
