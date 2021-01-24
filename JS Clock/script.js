setInterval( clockUpdate , 1000 );
setInterval( clockNumbersUpdate , 1000);
setInterval( updateAlarm , 1000);
var party_flag = false;

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

function parseNumber(str) {
    if(str[0] == '0') {
        return Number(str[1]);
    }
    else if(str[0] != '0') {
        return Number(str);
    }
}
function updateAlarm() {
    if(!party_flag){
        if (inputMDEx1.value) {
            console.log(parseNumber(inputMDEx1.value.split(':')[0]));
            console.log(parseNumber(inputMDEx1.value.split(':')[1]));
    
            let date = new Date();
            let alarm_hour = inputMDEx1.value.split(':')[0];
            let alarm_minute = inputMDEx1.value.split(':')[1];
            let type = document.getElementById("inputState").value;
            if (alarm_hour == date.getHours() && (date.getMinutes() - alarm_minute <= 5)) {
                if(type == "Nap"){
                    document.getElementById("alarm-img").src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
                    document.getElementById("timeEvent").innerHTML = "Let's take a Nap!";
                }
                else if(type == "Lunch"){
                    document.getElementById("alarm-img").src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
                    document.getElementById("timeEvent").innerHTML = "LET'S EAT!";
                }
                else if(type == "WakeUp"){
                    document.getElementById("alarm-img").src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
                    if(date.getHours() >= 5 && date.getHours() < 12)
                    {
                        document.getElementById("timeEvent").innerHTML = "Good Morning!";
                    }
                    else if(date.getHours() >= 12 && date.getHours() < 18)
                    {
                        document.getElementById("timeEvent").innerHTML = "Good afternoon!";
                    }
                    else
                    {
                        document.getElementById("timeEvent").innerHTML = "Good evening!";
                    }
                }
            }
            else {
                document.getElementById("alarm-img").src = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
                document.getElementById("timeEvent").innerHTML = "NO CURRENT ALARM!";
            }
        }
    }

}

function party() {
    if(party_flag) {
        document.getElementById("alarm-img").src = "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop";
        document.getElementById("timeEvent").innerHTML = "NO CURRENT ALARM!";
    }
    else {
        document.getElementById("alarm-img").src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        document.getElementById("timeEvent").innerHTML = "let's Party!";
    }
    party_flag = !party_flag;
}

clockUpdate();
clockNumbersUpdate();
updateAlarm();