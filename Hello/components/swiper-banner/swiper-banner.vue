<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular class="my-1">
		<!-- swipers 是从父组件传进来的数据 -->
		<swiper-item v-for="(swiper,w) in swipers" :key="w">
			<view class="swiper-item">
				<image :src="swiper.src" mode="heightFix">
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "swiper-banner",
		data() {
			return {

			};
		},
		props: {
			swipers: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		watch: {
			swipers: {
				handler(newV, oldV) {
					console.log('newV', newV)
				},
				immediate: true,
				deep: true
			}
		}
	}
</script>

<style>

</style>
