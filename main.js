const btn = document.querySelector(".btn");
const bgcolor = document.querySelector(".bgcolor");

btn.addEventListener("click", function(){

    const bgcolor = Math.trunc(Math.random() * 1000000); 

    document.querySelector("#background-change").style.background = `#${bgcolor}`;           

    document.querySelector("#colorcode").innerHTML =  `#${bgcolor}`

});