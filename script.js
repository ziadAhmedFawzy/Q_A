// Get Childs

let child1 = document.getElementsByClassName("child")[0];

let child2 = document.getElementsByClassName("child")[1];

let child3 = document.getElementsByClassName("child")[2];

// GET INPUTS

let btn1 = document.getElementsByClassName("btn")[0];

let btn2 = document.getElementsByClassName("btn")[1];

let btn3 = document.getElementsByClassName("btn")[2];


btn1.addEventListener("click" , function() {
    child1.classList.toggle("grow");
})

btn2.addEventListener("click" , function() {
    child2.classList.toggle("grow");
})

btn3.addEventListener("click" , function() {
    child3.classList.toggle("grow");
})