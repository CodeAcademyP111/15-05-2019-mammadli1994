// var link=document.getElementById("facebook");

// var links=document.getElementsByClassName("social_link");

// var li = document.querySelector("#social li:last-child");
// li.style.display = "inline-block";
// li.style.backgroundColor = "red";
// li.style.marginTop = "10px";
// li.style.border = "1px solid black";


// console.log(a)

var li = document.querySelector("#social li");

var button=document.querySelector("#changeColor");

// button.onclick=changeBack;

function changeBack() {
    li.style.backgroundColor = "red";
}

button.addEventListener("click",function(){
    li.style.backgroundColor = "red";
})

button.addEventListener("click",changeBack)

