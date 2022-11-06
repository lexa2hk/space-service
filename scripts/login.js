
document.addEventListener('keydown', function (event) {
    if (event.code == 'Escape') {
        drawflag = false;
        let drawBtn = document.getElementById("drawBtn");
        drawBtn.innerHTML = "Нарисовать";


        document.getElementById("ask-container").style.display = "none";
    } else if (event.code == 'Enter' && event.ctrlKey) {
        loginToAdminPanel();
    }
});


var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    // console.log(x, y);
}

function getMouseX() {
    return x;
}

function getMouseY() {
    return y;
}



function checkADForm() {
    // alert("checkADForm");
    var inputValue = document.getElementById("ask-input").value;
    let div = document.createElement("div");
    div.className = "ask-response";
    // let position =  document.getElementById("ask-container").append();

    if (inputValue == "Да") {
        div.innerHTML = "Круто! Добро пожаловать!";

    } else {
        div.innerHTML = "Попробуй еще раз!";
    }

    document.getElementsByClassName("ask")[0].append(div);
}

//ask login with prompt
function loginToAdminPanel() {
    let login = prompt("Введите логин");

    if (login == "admin") {

        let adminPassword = prompt("Введите пароль");
        if (adminPassword == "Я главный") {
            alert("Добро пожаловать в панель администратора");
            console.log("Добро пожаловать в панель администратора");
        } else if (adminPassword == null) {
            alert("Выход из панели администратора");
            console.log("Выход из панели администратора");

        } else {
            alert("Пароль не верный");
            console.log("Пароль не верный");
        }

    } else if (login == null) {
        alert("Выход из панели администратора");
        console.log("Выход из панели администратора");
    } else {
        alert("Неверный логин");
    }
}

//functon for changing color on click
//or https://qna.habr.com/q/714297
function likeBtn(elem) {
    if (elem.style.color == "red") {
        elem.style.color = "white";
    } else {
        elem.style.color = "red";
    }

}

drawflag = false;

function drawBtnClick() {
    drawflag = !drawflag;
    let drawBtn = document.getElementById("drawBtn");
    if (drawflag) {
        drawBtn.innerHTML = "Остановить";
    } else {
        drawBtn.innerHTML = "Нарисовать";
    }
}

document.body.setAttribute('onclick', 'draw(event)');


function draw(ev) {

    if (!drawflag) return;

    var div = document.createElement('div');
    div.id = '12';
    div.className = '11';

    div.style.position = 'absolute';
    div.style.height = '50px';
    div.style.width = '50px';
    div.style.backgroundColor = 'cornflowerblue';
    div.style.top = (y-20) + 'px';
    div.style.left = (x-20) + 'px';
    div.style.zIndex = '1000';
    div.style.borderRadius = '50%';

    var body = document.getElementsByTagName('body');
    body[0].appendChild(div);

    setTimeout(function () {
        body[0].removeChild(div);
    }, 1000)
}

