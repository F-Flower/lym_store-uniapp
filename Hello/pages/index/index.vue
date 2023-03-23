<template>
	<view class="Lym-shop">
		<!-- 手动实现小程序的顶部状态栏  -->
		<!-- #ifdef MP-WEIXIN -->
		<!-- 上面的代码实现，以下代码仅在微信小程序中显示 -->
		<search-slot>
			<view class="mr-1" slot="left">
				<text class="iconfont icon-xiaoxi"></text>
			</view>
			<!-- 使用类名简写样式，添加一个点击事件 -->
			<view class="flex-1 text-center text-muted mx-2 search" slot="center" @click="goSearch">
				<text class="iconfont icon-sousuo"></text>
				<text class="font-md">请输入搜索内容</text>
			</view>
			<view class="ml-1" slot="right" @click="scanCode">
				<text class="iconfont icon-richscan_icon"></text>
			</view>
		</search-slot>
		<!-- #endif -->
		<!-- 滑块导航区域，x轴横向滑动-->
		<!-- scroll-into-view:设置哪个方向可滚动，则在哪个方向滚动到该元素 -->
		<view style="width: 100%;height: 74rpx;overflow: hidden;">
			<!-- 设置行内样式实现隐藏H5端的滚动条 -->
			<scroll-view scroll-x="true" :scroll-into-view="scrollinto" :show-scrollbar="false"
				:scroll-with-animation="true">
				<view class="ws search-scroll">
					<view v-for="(item,index) in navbars" :key="index" class="mx-2 d-inline-block font-md"
						:class="index==currentIndex?'active':''" @click="changeTab(index)" :id="'tab'+index">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 轮播内容区域 -->
		<swiper :style="'height:'+scrollHeight">
			<!-- 循环不同页面的内容 -->
			<swiper-item v-for="(newitem,n) in newItems" :key="n">
				<view class="swiper-item">
					<scroll-view scroll-y="true" :style="'height:'+scrollHeight">
						<!-- 如果当前页面内容不为空 -->
						<template v-if="newitem.list.length>0">
							<!-- 遍历list中的五个类型的数组 -->
							<block v-for="(section,s) in newitem.list" :key="s">
								<!-- swiper 轮播图区域-->
								<template v-if="section.type=='swiper'">
									<!-- 导入轮播图组件 -->
									<swiper-banner :swipers="section.data"></swiper-banner>
								</template>
								<!-- 金刚区 -->
								<template v-else-if="section.type=='indexnavs'">
									<!-- 导入金刚区组件 -->
									<swiper-boxs :boxs="boxs"></swiper-boxs>
									<!-- 分割线组件 -->
									<divider></divider>
								</template>
								<!-- 三图广告区域 -->
								<template v-else-if="section.type=='threeAdv'">
									<!-- 导入三图区组件 -->
									<three-adv :section='section'></three-adv>
									<!-- 分割线组件 -->
									<divider></divider>
								</template>
								<!-- 一标题+一图区域 -->
								<template v-else-if="section.type=='oneAdv'">
									<!-- 不传入title或cover页面就不显示内容，即空组件，可以在里面插入内容 -->
									<one-adv :title='section.data.title' :cover='section.data.cover'></one-adv>
									<!-- 此处有插槽，可以写内容插入页面 -->
									<!-- 分割线组件 -->
									<divider></divider>
								</template>
								<!-- list列表区域 -->
								<template v-else-if="section.type=='list'">
									<content-list :section="section"></content-list>
								</template>
							</block>
						</template>
						<!-- 当前页面没有数据 -->
						<template v-else>
							<view>本页面暂无数据</view>
						</template>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	import {
		getHome
	} from '../../api/index.js'
	export default {
		data() {
			return {
				title: 'Hello',
				// 当前点击的id
				currentIndex: 0,
				// 默认为空字符串，值应为某子元素id（id不能以数字开头）
				scrollinto: '',
				// 滑块区域的标题
				navbars: [],
				// 可滚动区域高度
				scrollHeight: '',
				// 存储每个标题对应的页面内容
				newItems: []
			}
		},
		onLoad() {
			// H5和APP端的滚动区域设置
			// #ifdef H5||APP-PLUS
			uni.getSystemInfo({
				success: (res) => {
					// console.log(res);
					this.scrollHeight = res.windowHeight - uni.upx2px(88) + 'px'
				}
			})
			// #endif
			// 小程序的可滚动区域设置
			// #ifdef MP
			uni.getSystemInfo({
				success: (res) => {
					this.scrollHeight = res.windowHeight - uni.upx2px(176) + 'px'
				}
			})
			// #endif
		},
		mounted() {
			this.gethome()
		},
		computed: {
			// 实现一维数组转换成二维数组[[1,2,3,4,5,6,7,8],[9,10]]
			boxs() {
				// 获取索引值
				let index = this.currentIndex
				let arr = []
				if (this.newItems[index]) {
					this.newItems[index].list.map(item => {
						if (item.type == 'indexnavs') {
							// 找到金刚区的数据
							// item.data获得的是一个对象类型，需要转换成数组类型，可以使用Object.values的方法转换
							let boxs = Object.values(item.data)
							// v-- > 元素; i-- > 索引值
							boxs.forEach((v, i) => {
								let num = Math.floor(i / 8)
								if (!arr[num]) {
									arr[num] = []
								}
								arr[num].push(v)
							})
						}
					})
				}
				// console.log(arr);
				return arr
			}
		},
		methods: {
			// 点击搜索框跳转到搜索页
			goSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			},
			// 点击扫描实现扫码功能
			scanCode() {
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			// 点击滑块区域的tab标题，进行样式等变换
			changeTab(index) {
				if (index == this.currentIndex) return
				this.currentIndex = index
				this.scrollinto = 'tab' + index
				if (this.currentIndex < 6) {
					this.scrollinto = 'tab0'
				} else if (this.current < 8) {
					this.scrollinto = 'tab4'
				}
			},
			// 请求方法
			gethome() {
				getHome().then(res => {
					console.log('res=>', res);
					// 获得滑动区域存储数据的数组
					this.navbars = res.data.category
					// 循环遍历category数组存储的数据是否为空
					for (var i = 0; i < this.navbars.length; i++) {
						var obj = {
							list: []
						}
						if (i == 0) {
							// 获取首页的数据
							obj.list = res.data.data
						}
						this.newItems.push(obj)
					}
					console.log("newItems=>", this.newItems);
				})
			}
		},
		//监听原生标题栏搜索输入框点击事件,disabled 为 true 时才会触发
		onNavigationBarSearchInputClicked() {
			uni.switchTab({
				url: "/pages/cate/cate"
			})
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e) {
			console.log(e);
			// 找到右侧扫描
			if (e.index == 1) {
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		height: 60rpx;
		line-height: 60rpx;
		background-color: #f5f5f5;
	}

	.search-scroll {
		height: 88rpx;
		line-height: 88rpx;
	}
</style>
