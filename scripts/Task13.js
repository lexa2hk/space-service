let contents = document.querySelector("#contents");
console.log(contents);

// for all a tags prevent default action using delegation and ask confirmation
contents.addEventListener("click", (event) => {
    console.log(event.target);
    if(event.target.tagName == "A"){
        event.preventDefault();
        if(confirm("Sure?")){
            window.location.href = event.target.href;
        }
    }
});

//create pretty list
let list = document.querySelector(".simpleList ul");
let listItems = list.querySelectorAll(".simpleList ul li");

//prevent text selection for all list items
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('mousedown', (event) => {
        event.preventDefault();
    });
}


list.addEventListener("click", (event) => {
    if(event.target.tagName == "LI"){
        let li = event.target;
        if(event.ctrlKey){
            li.classList.toggle("selected");
        }
        else if(event.shiftKey){
            let first = listItems[0];
            let last = listItems[listItems.length - 1];
            let start = 0;
            let end = 0;
            for(let i = 0; i < listItems.length; i++){
                if(listItems[i] == first){
                    start = i;
                }
                if(listItems[i] == last){
                    end = i;
                }
            }
            for(let i = start; i <= end; i++){
                listItems[i].classList.add("selected");
            }
        }
        else{
            for(let i = 0; i < listItems.length; i++){
                listItems[i].classList.remove("selected");
            }
            li.classList.add("selected");
        }
    }
});

//handle slider
let slider = document.querySelector(".simpleSlider #slider #pimp");


slider.onmousedown = function(e) {

    var coords = getCoords(slider);
    var shiftX = e.pageX;
  
    // slider.style.position = 'absolute';
    moveAt(e);
  
    slider.style.zIndex = 1000; // над другими элементами
  
    function moveAt(e) {
        //if slider is out of bounds - stop moving
        if(e.pageX < coords.left){
            slider.style.left = 0;
            return;
        }
        if(e.pageX > coords.left +180){
            slider.style.left = 180 + "px";
            return;
        }
        slider.style.left = e.pageX - shiftX + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    slider.onmouseup = function() {
      document.onmousemove = null;
      slider.onmouseup = null;
    };
  
  }
  
  slider.ondragstart = function() {
    return false;
  };
  
  function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
      left: box.left + scrollX
    };
  }


function dragdrop(obj, cart) {
    obj.onmousedown = function(e) {
        var coords = getCoords(obj);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
        obj.style.position = 'absolute';
        moveAt(e);
        obj.style.zIndex = 1000; // над другими элементами
        function moveAt(e) {
            obj.style.left = e.pageX - shiftX + 'px';
            obj.style.top = e.pageY - shiftY + 'px';
        }
        document.onmousemove = function(e) {
            moveAt(e);
        };
        
        //when mouse is up - check if it is in cart and if so - remove item
        obj.onmouseup = function() {
            document.onmousemove = null;
            obj.onmouseup = null;
            if(isInCart(obj, cart)){
                var cost = cart.querySelector('#cost');
                console.log(obj.innerHTML.split(' ')[2]);
                cost.innerHTML= Number(cost.innerHTML) + Number(obj.innerHTML.split(' ')[2]);
                obj.remove();
            }
        };

        function isInCart(obj, cart){
            let cartCoords = getCoords(cart);
            let objCoords = getCoords(obj);
            if(objCoords.left > cartCoords.left && objCoords.left < cartCoords.left + cart.offsetWidth){
                if(objCoords.top > cartCoords.top && objCoords.top < cartCoords.top + cart.offsetHeight){
                    return true;
                }
            }
        }

        function getCoords(elem) {   // кроме IE8-
            var box = elem.getBoundingClientRect();
            return {
                top: box.top + scrollY,
                left: box.left + scrollX
            };
        }
    };
    obj.ondragstart = function() {
        return false;
    };
}

smartCart = document.querySelector(".smartCart");
cart = document.querySelector("#cart");

smartCart.onmousedown = function(e) {
    console.log(e.tagName);
    if(e.target.tagName == "LI"){
        e.preventDefault();
        dragdrop(e.target,cart);
    }
}







function animateRocket(){
    let rocket = document.querySelector('.goUp');
    rocket.style.transition = 'all 1s ease-in-out';
    rocket.style.bottom = '100%';
    

    setTimeout(function(){
        rocket.style.transition = 'all .1s ease-in-out';
        rocket.style.bottom = '40px';
    }, 1000);
}

let smallGallery = document.querySelector('.smartGal');
console.log(smallGallery);
let bigImg = document.querySelector('.mainImg');

smallGallery.addEventListener('click', function(e){
    console.log(e.target.src);
    if(e.target.tagName == 'IMG'){
        
        bigImg.src = e.target.src;
    }
});