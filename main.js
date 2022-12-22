let q = (e)=>{
	return document.querySelector(e)
}

let _q = (e)=>{
	return document.querySelectorAll(e)
}

let kiki_day = new Date("Dec 22, 2022 22:12:30").getTime()
let _hours = q(".hours"), _minutes = q(".minutes"), _seconds = q(".seconds")
let _message = q(".birthday_message")

let happy_birthday = ()=>{
	q("body").classList.add("birthday_body")
	_message.classList.add("birthday_message_visible")
}

let update_time = ()=>{
	let milliseconds_now = new Date().getTime()
	let left_millis = kiki_day - milliseconds_now
	if(left_millis < 0){
		q(".fireworks").style.display = "initial"
		setTimeout(happy_birthday, 2000)
		render_time(0, 0, 0)
		return;
	}
	let seconds = parseInt(left_millis/1000)
	let minutes = parseInt(seconds/60)
	seconds = seconds - minutes*60
	let hours = parseInt(minutes/60)
	minutes = minutes - hours*60
	render_time(seconds, minutes, hours)
	setTimeout(update_time, 1000)
}

let render_time = (seconds, minutes, hours) => {
	_hours.innerHTML = hours > 9 ? hours : "0" + hours
	_minutes.innerHTML = minutes > 9 ? minutes : "0" + minutes
	_seconds.innerHTML = seconds > 9 ? seconds : "0" + seconds
}

update_time()