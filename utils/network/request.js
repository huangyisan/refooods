class Request {
	constructor(parms) {
		this.baseURL = parms.baseURL
		this.api = parms.api
		this.timeout = parms.timeout ? parms.timeout : 2000
	}

	request(method, url, data) {
		return new Promise((resolve, reject) => {
			wx.request({
				url = this.baseURL + this.api + url,
				data,
				method,
				success(res) {
					resolve(res)
				},
				fail() {
					reject({
						msg: '请求失败',
						url: this.baseURL + this.api + url,
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

