let popUp = document.getElementById("mypopup");
let popUpToggle = document.getElementById("myBtn");
let popUpClose = document.getElementById("close");
let replyOpen = document.querySelector(".action-buttons__message");
let replyClose = document.querySelector(".close-button-img");
let reply = document.querySelector(".reply");
let callBackOpen = document.querySelector(".action-buttons__tel");
let callBack = document.querySelector(".call-back");
let blur = document.querySelector(".line");
let callBackClose = document.querySelector(".close-button__call-back");
let telephone = document.querySelector(".telephone-button");
let message = document.querySelector(".message-button");
let body = document.querySelector("body");
let pageWidth = document.body.clientWidth;




popUpToggle.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.position="fixed";
        popUp.style.width="320px";//закрыть главное меню
        popUp.style.height="100%";
        popUp.style.boxShadow="none";
        blur.style.display="inline";
    }
    else{
    popUp.style.display="flex";
    popUp.style.position="fixed";
    popUp.style.width="320px"; //открыть главное меню
    popUp.style.height="100%";
    blur.style.display="inline";}


};

popUpClose.onclick = function (){

    popUp.style.display="none";
    popUp.style.width="0px";//закрыть главное меню
    popUp.style.height="0px";
    blur.style.display="none";


}
blur.onclick = function (){
    if (pageWidth >=1120){
        callBack.style.display="none";
        reply.style.display="none";
        popUp.style.display="block";
        popUp.style.position="absolute";
        blur.style.display="none";
        body.style.position = "static";
    }
    else{
        callBack.style.display="none";
        reply.style.display="none";
        popUp.style.display="none";
        popUp.style.width="0px";//закрыть главное меню
        popUp.style.height="0px";
        blur.style.display="none";
        popUp.style.position="absolute";
        body.style.position = "static";
    }
}



replyOpen.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.width="320px";           //открыть обратный звонок
        popUp.style.height="1024px";
        popUp.style.boxShadow="none";
        popUp.style.zIndex="2";
        reply.style.display="inline-block";
        blur.style.display="inline";

        reply.style.position="fixed";
        body.style.position="fixed";
    }
    else {
        reply.style.display = "inline";
        reply.style.position = "fixed";
        popUp.style.display = "none";       //открыть reply

        blur.style.display = "inline";
        body.style.position = "fixed";
    }

 }
replyClose.onclick = function (){
    body.style.position="static";
    reply.style.display="none";
    blur.style.display="none";
    callBack.style.display="none";//закрыть reply
}
callBackOpen.onclick = function (){
    if (pageWidth >=1120){
        popUp.style.display="block";
        popUp.style.width="320px";           //открыть обратный звонок
        popUp.style.height="1024px";
        popUp.style.boxShadow="none";
        callBack.style.display="inline-block";
        blur.style.display="inline";
        callBack.style.position="fixed";
        body.style.position = "fixed";
    }
    else{
    callBack.style.display="inline-block";
    popUp.style.display="none";
    popUp.style.width="0px";
    popUp.style.height="0px";
        body.style.position = "fixed";
    callBack.style.position="fixed";
        blur.style.display="inline";
    }
}
callBackClose.onclick = function (){
    callBack.style.display="none";
    blur.style.display="none";
    body.style.position = "static";
}
telephone.onclick= function (){
    callBack.style.display="inline-block";
    //открыть обратный звонок
    callBack.style.position="fixed";
    blur.style.display="inline";

}
message.onclick= function (){
    reply.style.display="inline";
    reply.style.position="fixed";
    blur.style.display="inline";
}