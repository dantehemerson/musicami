import Logo from '../assets/images/logo.png'

export default (title, body) => {
	Notification
		.requestPermission()
		.then(function() {
			let n = new Notification(title, {
				body,
				icon: Logo
			})
			setTimeout(n.close.bind(n), 3000)
		})
}
