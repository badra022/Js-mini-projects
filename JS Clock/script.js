setInterval( clockUpdate , 1000 )


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

clockUpdate();