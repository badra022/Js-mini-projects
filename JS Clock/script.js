setInterval( clockUpdate , 1000 );
setInterval( clockNumbersUpdate , 1000);
setInterval( updateAlarm , 1000);


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
    if (inputMDEx1.value) {
        console.log(parseNumber(inputMDEx1.value.split(':')[0]));
        console.log(parseNumber(inputMDEx1.value.split(':')[1]));

        let type = document.getElementById("inputState").value;
        if(type == "Nap"){
            document.getElementById("timeEvent").innerHTML = "Wake Up!";
        }
        else if(type == "Lunch"){
            document.getElementById("timeEvent").innerHTML = "LET'S EAT!";
        }
        else if(type == "WakeUp"){
            document.getElementById("timeEvent").innerHTML = "Good Morning!";
            document.getElementById("timeEvent").innerHTML = "Good evening!";
            document.getElementById("timeEvent").innerHTML = "Good afternoon!";
        }
        else {
            document.getElementById("timeEvent").innerHTML = "NO CURRENT ALARM!";
        }

    }
}

function party() {
    let party = document.getElementById("party-button").value;
    console.log(document.getElementById("party-button").value);

    document.getElementById("timeEvent").innerHTML = "let's Party!";
}

clockUpdate();
clockNumbersUpdate();
updateAlarm();