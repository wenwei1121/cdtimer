const days_display = document.getElementById("days")
const hours_display = document.getElementById("hours")
const minutes_display = document.getElementById("minutes")
const seconds_display = document.getElementById("seconds")


function countdown() {
    
const summer_end_date = new Date("10 Oct 2021") // 設定未來時間
const current_date = new Date() // 抓取現在時間
const total_seconds = (summer_end_date - current_date) / 1000 // 以秒為單位 毫秒/1000=秒

const days = Math.floor(total_seconds / 3600 / 24)
const hours = Math.floor(total_seconds / 3600) % 24
const minutes = Math.floor(total_seconds / 60) % 60
const seconds = Math.floor(total_seconds) %60

days_display.innerHTML = days
hours_display.innerHTML = hours
minutes_display.innerHTML = minutes
seconds_display.innerHTML = seconds

}

countdown()

setInterval(countdown, 1000)