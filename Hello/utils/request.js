// H5配置
// #ifdef H5
var baseURL = "/api"
// #endif
// 小程序和APP配置
// #ifndef H5
var baseURL = "http://81.68.254.47/api"
// #endif
// 配置请求
var request = function(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			// 请求接口地址
			url: baseURL + options.url,
			// 请求的参数
			data: options.data || "{}",
			// 请求的header
			header: options.header || {},
			// 请求的方式
			method: options.method || "GET",
			// 请求的数据类型
			dataType: options.dataType || "json",
			success: (res) => {
				return resolve(res.data);
			},
			fail: (error) => {
				return reject(error)
			}
		})
	})
}
export default request
