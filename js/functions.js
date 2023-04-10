function createCard(element){
    let menuContainer = document.querySelector("#menu .container");
    let div = document.createElement("div"),
    img = document.createElement("img"),
    h2 = document.createElement("h2"),
    addBtn = document.createElement("button");

    div.setAttribute("class", "card");
    img.setAttribute("src", element.imagePath);
    h2.textContent = element.name + " " + element.price;
    addBtn.textContent ="Add to Card";

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(addBtn);
    menuContainer.appendChild(div);     
   
}

function showData(element){
    element.forEach(item => {
    createCard(item);   
   });
}

function showAllData(){
    clearContainer();
    showData(pizza);
    showData(steak);
    showData(drinks);
    showData(pasta);
}

function clearContainer(){
    let menuContainer = document.querySelector("#menu .container");
    menuContainer.innerHTML=null;
}


function setCookie(cookieName, cookieValue) {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `${cookieName}=${cookieValue};expires=${date}`;
}

function getCookie(cookieName) {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      cookies[i] = cookies[i].replace(" ", "");
      cookies[i] = cookies[i].split("=");
      if (cookies[i][0] == cookieName) {
        return cookies[i][1];
      }
    }
  }

  function updateCounter(){
    let count = parseInt(getCookie("count"));
        count++;
        setCookie('count', count);
    let counter = document.getElementById("count");
    counter.textContent= count;
}
function scrollFunction() {
    let topArrow = document.getElementById("upArrow");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topArrow.style.display = "block";
    } else {
        topArrow.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}