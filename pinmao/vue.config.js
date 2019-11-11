module.exports = {
	devServer: {
		port: "8080",
		host: "127.0.0.1",
		open: true,
		proxy: {
			"/pinmao": {
				target: "http://127.0.0.1:8849/pinmaozx",
				changeOrigin: true,
				pathRewrite: {
					"^/pinmao": ""
				}
			}
		}
	}
}
