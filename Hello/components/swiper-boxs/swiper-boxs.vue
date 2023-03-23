<template>
	<!-- 需要把十个数据分成两个数组：[[1,2,3,4,5,6,7,8],[9,10]] -->
	<swiper style="height:320rpx" class="mt-2">
		<!-- 遍历出两个数组 -->
		<swiper-item v-for="(box,b) in boxs" :key="b">
			<!-- flex-wrap:换行 -->
			<view class="swiper-item d-flex flex-wrap text-center">
				<!-- 遍历每个数组中的内容 -->
				<!-- span-5:每个块的大小是25% -->
				<view v-for="(item,i) in box" :key="i" class="span-5 mb-2">
					<image :src="item.src" mode="" class="img"></image>
					<view>{{item.text}}</view>
				</view>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "swiper-boxs",
		data() {
			return {

			};
		},
		props: {
			boxs: {
				type: Array
			}
		}
	}
</script>

<style scoped>
	.img {
		width: 88rpx;
		height: 88rpx;
	}
</style>
