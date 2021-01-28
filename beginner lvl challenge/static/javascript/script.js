document.querySelector('.button1').addEventListener('click', enterAge);
document.querySelector('.button2').addEventListener('click', clearAge);
document.querySelector('.button3').addEventListener('click', generateCat);
document.querySelector('.button4').addEventListener('click', changeColor);


function enterAge() {
    var age = prompt('enter your year of birth');
    if (age != null){
        let date = new Date();
        age = (date.getFullYear() - age) * 365;
        let answer = document.createElement('h1');
        answer.innerHTML = "your age in days is " + age;
        document.querySelector('.output-text').appendChild(answer);
    }
}

function clearAge() {
    document.querySelector(".output-text").querySelector("h1").remove();
}

function generateCat() {
    let newiImage = document.createElement('img');
    newiImage.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    document.querySelector('.cats').appendChild(newiImage);
}

function changeColor() {
    let color = document.querySelector('.selected').nodeValue;
    console.log("hey");
    if(color == 'default'){
        document.querySelector('.button4').setAttribute('style' , 'color: grey');
    }
    else if(color == 'red'){
        document.querySelector('.button4').setAttribute('style' , 'color: red');
    }
    else if(color == 'blue'){
        document.querySelector('.button4').setAttribute('style' , 'color: blue');
    }
    else if(color == 'yellow'){
        document.querySelector('.button4').setAttribute('style' , 'color: yellow');
    }
}


changeColor();