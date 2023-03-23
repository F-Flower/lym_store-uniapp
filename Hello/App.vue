<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 中间按钮点击事件 需要写到App.vue中
			uni.onTabBarMidButtonTap(()=>{
				console.log('中间按钮点击触发了');
				// 跳转到指定路径的tabBar页面
				uni.switchTab({
					url:'/pages/index/index'
				})
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./common/lib/uni.css");
	@import url('./common/lib/icon.css');
	@import url('./common/lib/zcm-main.css');
</style>
