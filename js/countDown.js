const myDays = document.getElementById('days')
const myHours = document.getElementById('hours')
const myMins = document.getElementById('mins')
const mySecs = document.getElementById('secs')


const newDay = '1 Jan 2022'
//console.log(newDay);

function countDown() {
    const newDate = new Date (newDay);
    const myDate = new Date();
    const diffTime = myDate - newDate;
    //console.log(diffTime);
    const daysCount = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffTime/daysCount)
    console.log(days);
    const hours = myDate.getHours();
    //console.log(hours);
    const mins = myDate.getMinutes();
    //console.log(mins);
    const secs = myDate.getSeconds();
   // console.log(secs);

    myDays.innerHTML = formatTime(days);
    myHours.innerHTML = formatTime(hours);
    myMins.innerHTML = formatTime (mins);
    mySecs.innerHTML = formatTime(secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countDown()
setInterval(countDown, 1000)

// var seconds = date.getSeconds();
// var minutes = date.getMinutes();
// var hour = date.getHours();