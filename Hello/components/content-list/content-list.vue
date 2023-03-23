<template>
	<view class="d-flex flex-wrap">
		<view v-for="(item,i) in section.data" :key="i" class=" w-50">
			<image :src="item.cover" class="w-100"></image>
			<view class="mx-1">
				<text class="font-weight" style="font-size: 35rpx;">
					{{item.title}}
				</text>
				<view class="detail">
					{{item.desc}}
				</view>
				<p-price>
					<text slot="newprice">￥{{item.pprice}}</text>
					<text slot="oldprice">原价: ￥{{item.oprice}}</text>
				</p-price>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "content-list",
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

<style scoped>
	.detail {
		/* 作为弹性伸缩盒子模型显示 */
		display: -webkit-box;
		/* 设置伸缩盒子对象的子元素排列方式 */
		-webkit-box-orient: vertical;
		/* 设置块元素包含的文本行数 */
		-webkit-line-clamp: 3;
		/* 溢出隐藏 */
		overflow: hidden;
		line-height: 1.4;
	}
</style>
