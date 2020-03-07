class Request {
	constructor(parms) {
		this.baseURL = parms.baseURL
		this.api = parms.api
		this.timeout = parms.timeout ? parms.timeout : 2000
	}

	request(method, url, data) {
		// 这边vm=this用来固化this属于class Request的域.
		const vm = this
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.baseURL + this.api + url,
				data,
				method,
				success(res) {
					resolve(res)
				},
				fail(info) {
					reject({
						msg: '请求失败',
						// 这边不能用this. 因为this的域已经不在class Request里了
						url: vm.baseURL + vm.api + url,
						method,
						data
					})
				}
			})
		})
	}

	get(url, data) {
		return this.request('GET', url, data)
	}
	post(url, data) {
		return this.request('POST', url, data)
	}
	put(url, data) {
		return this.request('PUT', url, data)
	}

}

export const request = new Request({
	baseURL: 'https://www.easy-mock.com',
	api: '/mock',
})

