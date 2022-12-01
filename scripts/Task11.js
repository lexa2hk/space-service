let timeoutNotification = 1000;
isOpened = false;


function changeOrder(){
    var PropsCont = document.querySelector('.props-container');
    var itemlist = document.querySelectorAll('.props-container .prop');

    PropsCont.insertBefore(itemlist[itemlist.length-1], itemlist[0]);

}   

function deleteFirst(){
    var PropsCont = document.querySelector('.props-container');
    var itemlist = document.querySelectorAll('.props-container .prop');

    PropsCont.removeChild(itemlist[0]);

}

const filterArray = (arr, down,top) => {
    let temparr = [];

    for( let i=0; i<arr.length; i++){
        if(arr[i] >= down && arr[i] <= top){
            temparr.push(arr[i]);
        }
    }
    return temparr;
}

// console.log(filterArray([1,2,3,4,5,6,7,8,9,10], 3, 7));

function swap(node1, node2) {
    var temp = document.createElement("div");
    node1.parentNode.insertBefore(temp, node1);
    node2.parentNode.insertBefore(node1, node2);
    temp.parentNode.insertBefore(node2, temp);
    temp.parentNode.removeChild(temp);
}

function sortProps(){
    var PropsCont = document.querySelector('.props-container');
    var itemlist = document.querySelectorAll('.props-container .prop');
    var size = itemlist.length;
    
    for(let i=1; i<size; i++){
        for(let j=0; j<size-1; j++){
            var itemlist = document.querySelectorAll('.props-container .prop');
            let header1 = Number(itemlist[i].querySelector('h1').innerHTML.split(" ")[0]);
            let header2 = Number(itemlist[j].querySelector('h1').innerHTML.split(" ")[0]);
            if(header1 < header2){
                swap(itemlist[i], itemlist[j]);
            }
        }
    }
    
}

function addNotification(){
    if(isOpened){
        return;
    }
    let notifList = document.querySelector('.cmc .cmt ul');

    let bar = document.createElement('div');
    bar.className = "bar-list";
    notifList.append(bar);

    let notif = document.createElement('li');
    notif.innerHTML = "Новое уведомление";

    let closeBtn = document.createElement('span');
    notif.appendChild(closeBtn);
    closeBtn.innerHTML = "X";
    notifList.append(notif);



    let notifNum = document.querySelector('.modal-checkbox .notification-num');
    notifNum.innerHTML = Number(notifNum.innerHTML) + 1;
    
}

function changeNotification(){
    isOpened = !isOpened;
}

let addSlowly = setInterval(addNotification, timeoutNotification);


setInterval(isOpened ? addNotification : addSlowly , timeoutNotification);


const ulList = document.querySelector('.cmc .cmt ul');


ulList.addEventListener('click', (event) => {
    if(event.target.tagName == "SPAN"){
        event.target.parentNode.remove();
        let notifNum = document.querySelector('.modal-checkbox .notification-num');
        notifNum.innerHTML = Number(notifNum.innerHTML) - 1;
    }
});
