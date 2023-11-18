
const msg=document.querySelector(".msg")


//when key is presses

document.body.addEventListener("keydown",function(e){
    console.log(e);
    msg.innerHTML=`You are pressing key: "${e.key}" 💙`;
});




//when key is released

document.body.addEventListener("keyup",function(e){
    console.log(e);
    msg.innerHTML=`You are releasing key: "${e.key}" 💔`;
});

