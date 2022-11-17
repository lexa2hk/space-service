
class Accumulator {
    constructor(startValue) {
        this.result = Number(startValue);
    }

    showResult() {
        alert(this.result);
    }
    
    getResult(){
        return this.result;
    }
    
    add(value) {
        this.result+= Number(value);
    }

    read(){
        this.result += Number(prompt("Введите число", 0));
    }
}
let acc = new Accumulator(0);

let cardData = new Map();


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
    div.style.top = (y - 20) + 'px';
    div.style.left = (x - 20) + 'px';
    div.style.zIndex = '1000';
    div.style.borderRadius = '50%';

    var body = document.getElementsByTagName('body');
    body[0].appendChild(div);

    setTimeout(function () {
        body[0].removeChild(div);
    }, 1000)
}


function truncate(str, maxlength){
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "…";
    } else {
        return str;
    }
}

function createcard(){
    let card = document.createElement("div");
    // card.style.width = "200px";
    // card.style.height=("200px");
    // card.style.backgroundColor=("grey");
    // borderRadius = "10px";
    // card.style.borderRadius=(borderRadius);
    // card.style.margin= ("10px");
    card.className = "card";
    let text = prompt("Введите текст");
    let length = prompt("Введите длину");
    card.innerHTML = "<p>"+truncate(text, length)+"</p>";
    document.getElementById("truncate-cards").append(card);
}


let a=Math.floor(Math.random()*10);
let b=Math.floor(Math.random()*10);
let sum=a+b;
document.getElementById("capcha").innerHTML = a + " + " + b + " = ?";

let CapchaBtn = document.getElementById("check-capcha");


function isEmpty( val ) {

    // test results
    //---------------
    // []        true, empty array
    // {}        true, empty object
    // null      true
    // undefined true
    // ""        true, empty string
    // ''        true, empty string
    // 0         false, number
    // true      false, boolean
    // false     false, boolean
    // Date      false
    // function  false

        if (val === undefined)
        return true;

    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;

    if (val == null || val.length === 0)        // null or 0 length array
        return true;

    if (typeof (val) == "object") {
        // empty object

        var r = true;

        for (var f in val)
            r = false;

        return r;
    }

    return false;
}


let input_capcha = document.getElementById("capcha-input");
input_capcha.addEventListener("input", function (e) {
    if(isEmpty(e.target.value)){
        CapchaBtn.disabled = true;
        console.log("isEmpty");
    }
    if (e.target.value == sum) {
        document.getElementById("capcha-input").style.backgroundColor = "lightgreen";
        CapchaBtn.disabled = false;
    } else {
        document.getElementById("capcha-input").style.backgroundColor = "pink";
        CapchaBtn.disabled = true;

    }
});


CapchaBtn.addEventListener("click", function (e) {
    if (input_capcha.value == sum) {
        alert("Успешный вход!");
    } else {
        alert("Как сделал это?");
    }
});



let accumulatorInstance = new Accumulator(1);

//if not in cart, then add to cart
//if in cart, increase quantity using add(value) method



function addToCart(name, price) {
    console.log(name + " " + price);
    let cart = document.getElementById("shopping-cart");
    let cartSearch = document.getElementById(name+"-cart");
    console.log(cardData);
    if (cartSearch == null) {
        cartItem = document.createElement("div");
        cartItem.id = name + "-cart";
        cartItem.className = "cart-item";
        var tempAcc = new Accumulator(1);
        cardData.set(name, tempAcc);
        console.log(name);
        console.log(cardData);

        cartItem.innerHTML = name + " " + price + " руб. / " + tempAcc.getResult();
        
        console.log(cart.innerHTML);
        cart.appendChild(cartItem);
    } else {
        let el = document.getElementById(name + "-cart");
        cardData[name].read();
        console.log(cardData[name]);
        el.innerHTML = name + " " + price + " руб. / " + cardData[String(name)].getResult();
    }
}


//test for acc


function testAcc(){
    document.querySelectorAll("#testAcc p").forEach(function (el) {
        acc.read();
        el.innerHTML =  "Total: "+acc.getResult();
    }
)};
