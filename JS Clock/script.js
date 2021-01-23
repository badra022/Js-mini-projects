setInterval( clockUpdate , 1000 );
setInterval( clockNumbersUpdate , 1000);

function clockUpdate() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + date.getHours()) / 12;
    updatehand('[data-second-hand]', secondsRatio);
    updatehand('[data-minute-hand]', minutesRatio);
    updatehand('[data-hour-hand]', hoursRatio);
}

function updatehand(selector, rotation) {
    document.querySelector(selector).style.setProperty('--rotation', rotation * 360);
}

function clockNumbersUpdate() {
    let date = new Date();
    var time;
    if (date.getHours() > 12)
    {
        time = (date.getHours() % 12) + ':' + date.getMinutes() + ':' + date.getSeconds() + "PM";
    }
    else{
        time = (date.getHours() % 12) + ':' + date.getMinutes() + ':' + date.getSeconds() + "AM";
    }
    document.getElementById("current-time").innerHTML = time;
}

clockUpdate();
clockNumbersUpdate();