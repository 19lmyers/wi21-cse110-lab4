function logDate() {
	let d = new Date();
	let time = d.toLocaleTimeString();
	console.log(time);
}
window.setInterval(logDate, 1000);