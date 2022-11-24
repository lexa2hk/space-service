
function useRegex(input) {
    let regex = /[0-9a-zA-Z.]+\.[0-9a-zA-Z/.]+/i;
    return regex.test(input);
}

const isExternalLink = (url) => {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
};

window.onload = loadfunction;

function loadfunction() {
    console.log("loadfunction");
    changeColorLinks();
    subtask4();
}


function changeColorLinks(){
    let links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        console.log(links[i].href);
        if (isExternalLink(links[i].href)) {
            links[i].style.color = "black";
        }else{
            links[i].style.color = "blue";
        }
    }
}


function addToList(){
    let text = prompt("Введите текст", "Текст");
    if(text == null){
        return;
    }
    let list = document.querySelector(".Task12 .dynamicList ul");
    let li = document.createElement("li");
    li.innerHTML = text;
    list.append(li);

}



function showNotification(text){
    let notificaion = document.createElement("div");
    notificaion.className = "notification";
    notificaion.innerHTML = text;
    notificaion.style.position = "fixed";
    notificaion.style.top = "50%";
    notificaion.style.left = "50%";
    notificaion.style.backgroundColor = "white";
    document.body.append(notificaion);
    setTimeout(() => {
        notificaion.remove();
    },1500);
}

function subtask4(){
    let container = document.querySelector(".Task12 .subtask4 .center-container");
    let image = document.querySelector(".Task12 .subtask4 .center-container img");

    //center container
    container.style.marginLeft = window.innerWidth/2 - container.offsetWidth/2 + "px";

    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    //image
    image.style.marginLeft = containerWidth/2 - image.offsetWidth/2 + "px";
    image.style.marginTop = containerHeight/2 - image.offsetHeight/2 + "px";
}
window.addEventListener("resize", subtask4);


function printClickPosition(event){
    let x = event.clientX;
    let y = event.clientY;
    let coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    // showNotification(coords);
}

window.addEventListener("click", printClickPosition);