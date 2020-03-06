export function request(config) {
uni.request({
	url: config.url,
	header: config.header,
	method: config.method,
	timeout: config.timeout,
	if (config.log){
		success:(res) => {
			console.log(res)
		}
	}else {
		return res
	}
})
}