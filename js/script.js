let steak =[
    {
        imagePath:"images/res_img_4.jpg",
        name: "steak",
        price: "15$"
    },
    {
        imagePath:"images/blog-img-3.jpg",
        name: "steak",
        price: "25$"
    },

    {
        imagePath:"images/blog-img-4.jpg",
        name: "steak",
        price: "20$"
    },

    {
        imagePath:"images/res_img_8.jpg",
        name: "steak",
        price: "30$"
    },

    {
        imagePath:"images/blog-bg.jpg",
        name: "steak",
        price: "25$"
    }

],

drinks =[
    {
        imagePath:"images/res_img_7.jpg",
        name: "drink",
        price: "15$"
    },
    {
        imagePath:"images/res_img_6.jpg",
        name: "drink",
        price: "10$"
    },

    {
        imagePath:"images/res_img_5.jpg",
        name: "drink",
        price: "7$"
    }

],

pizza =[
    {
        imagePath:"images/pizza-1.jpg",
        name: "pizaa",
        price: "15$"
    },
    {
        imagePath:"images/pizza8.jpg",
        name: "pizaa",
        price: "12$"
    },
    {
        imagePath:"images/pizza-2.jpg",
        name: "pizaa",
        price: "12$"
    },
    {
        imagePath:"images/pizza-7.jpg",
        name: "pizaa",
        price: "17$"
    }

],

pasta =[
    {
        imagePath:"images/pasta1.jpg",
        name: "Pasta",
        price: "25$"
    },
    {
        imagePath:"images/pasta2.jpg",
        name: "Pasta",
        price: "20$"
    },
    {
        imagePath:"images/pasta5.jpg",
        name: "Pasta",
        price: "22$"
    },
    {
        imagePath:"images/pasta6.jpg",
        name: "Pasta",
        price: "27$"
    }

];

let menuBtns = document.querySelectorAll("#menuBtn button");
let menuContainer = document.querySelector("#menu .container");
showAllData();
let addCards = document.querySelectorAll(".card button");

menuBtns[0].addEventListener('click',showAllData);
menuBtns[1].addEventListener('click',()=>{clearContainer(); showData(steak);  addCards = document.querySelectorAll(".card button"); });
menuBtns[2].addEventListener('click',()=>{clearContainer(); showData(pasta);  addCards = document.querySelectorAll(".card button"); });
menuBtns[3].addEventListener('click',()=>{clearContainer(); showData(pizza);  addCards = document.querySelectorAll(".card button"); });
menuBtns[4].addEventListener('click',()=>{clearContainer(); showData(drinks); addCards = document.querySelectorAll(".card button"); });

let topArrow = document.getElementById("upArrow");
topArrow.onclick = topFunction;
window.onscroll = function() {scrollFunction()};

setInterval(()=>{
addCards = document.querySelectorAll(".card button");
for(var i =0; i<addCards.length; i++){
    addCards[i].onclick = function(){
        updateCounter();        
    }
}
},100);

let span = document.getElementById("count");
if(getCookie("count")){
   
    span.textContent= getCookie("count");
}
else{
    span.textContent= 0;
    setCookie('count', 0);
}


// slider
let sliderImg =["./images/slide_1.jpg", "./images/slide_2.jpg", "./images/slide_3.jpg", "./images/res_img_5.jpg"];

let currentIndex = 0;
let header = document.getElementById("main"),
    leftArrow = document.getElementById("leftArrow"),
    rightArrow = document.getElementById("rightArrow");

function next(){
    if(currentIndex==sliderImg.length-1){
        currentIndex=-1;
    }
    header.style.backgroundImage= `url("${sliderImg[++currentIndex]}")`;
    console.log(currentIndex);
}

function previous(){
    if(currentIndex==0){
        currentIndex=sliderImg.length;
    }
    header.style.backgroundImage= `url("${sliderImg[--currentIndex]}")`;
    console.log(currentIndex);
}

leftArrow.onclick = previous;

rightArrow.onclick = next;

$barIcon = document.querySelector("nav .bar-icon");
$navLinksList = document.querySelector("nav ul");

$barIcon.addEventListener("click", function(e){
    $navLinksList.classList.toggle("show");
})