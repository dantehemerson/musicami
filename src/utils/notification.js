export default (title, body) => {
	Notification
		.requestPermission()
		.then(function() {
			let n = new Notification(title, {
				body,
				icon: `${process.env.PUBLIC_URL}/static/images/logo.png`
			})
			setTimeout(n.close.bind(n), 3000)
		})
}
