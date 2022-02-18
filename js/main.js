const days_display = document.getElementById("days")
const hours_display = document.getElementById("hours")
const minutes_display = document.getElementById("minutes")
const seconds_display = document.getElementById("seconds")


function countdown() {
    
const summer_start_time = new Date("1 Jul 2022") // 設定未來時間
// console.log(summer_start_time)
const current_time = new Date() // 抓取現在時間
// console.log(current_time)
const total_seconds = (summer_start_time - current_time) / 1000 // 以秒為單位 毫秒/1000=秒
console.log(total_seconds)
const days = Math.floor(total_seconds / 3600 / 24)
const hours = Math.floor(total_seconds / 3600) % 24
const minutes = Math.floor(total_seconds / 60) % 60
const seconds = Math.floor(total_seconds) % 60

days_display.innerHTML = days
hours_display.innerHTML = hours
minutes_display.innerHTML = minutes
seconds_display.innerHTML = seconds

}

countdown()

setInterval(countdown, 1000)