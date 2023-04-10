var form = document.querySelector("form"),
  userName = document.getElementById("name"),
  userEmail = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message"),
  submit = document.getElementById("submit"),
  errorMsg = document.getElementsByClassName("errorMsg"),
  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate() {
  var flag = true;
  if (userName.value == "") {
    errorMsg[0].style="display:block";
    userName.style = "border:2px solid red;";
    flag = false;
  }
  else if(!isNaN(userName.value)){
    errorMsg[0].style="display:block";
    userName.style = "border:2px solid red;";
    errorMsg[0].innerHTML = "your Name must be string*";
    flag = false;

  }
  if (!mailformat.test(userEmail.value)) {
    errorMsg[1].style="display:block";
    userEmail.style = "border:2px solid red;";
    flag = false;
  }
  if (subject.value == "") {
    errorMsg[2].style="display:block";
    subject.style = "border:2px solid red;";
    flag = false;
  }
  else if(!isNaN(subject.value)){
    errorMsg[2].style="display:block";
    subject.style = "border:2px solid red;";
    errorMsg[2].innerHTML = "your Subject must be string*";
    flag = false;
  }
  if (message.value == "") {
    errorMsg[3].style="display:block";
    message.style = "border:2px solid red;";
    flag = false;
  }
  return flag;
}

function clear() {
  for (let index = 0; index < errorMsg.length; index++) {
    errorMsg[index].style.display = "none";
  }
 
  userName.style = "border:1px solid black;";
  userEmail.style = "border:1px solid black;";
  subject.style = "border:1px solid black;";
  message.style = "border:1px solid black;";
}

userName.onfocus = clear;
userEmail.onfocus = clear;
subject.onfocus = clear;
message.onfocus = clear;

form.addEventListener("submit", function (event) {
  var val = validate();
  if (!val) {
    event.preventDefault();
  }
    else {   
      var confirmMessage = confirm("Are you sure to submit the form");
      if (!confirmMessage) {
      event.preventDefault();
    }
    else{
      userName.value = userEmail.value = subject.value = message.value = "";
      alert("Your message is sent:)");
    }
    
  } 
});

setTimeout(function () {
  if (
    userName.value == "" &&
    userEmail.value == "" &&
    subject.value == "" &&
    message.value == ""
  ) {
    alert("You must enter data");
  }
}, 30000);

let myspan = document.getElementById("count");
if(getCookie("count")){
   
    myspan.textContent= getCookie("count");
}
else{
    myspan.textContent= 0;
    setCookie('count', 0);
}


function updateCounter(){
    let count = parseInt(getCookie("count"));
        count++;
        setCookie('count', count);
    let counter = document.getElementById("count");
    counter.textContent= count;
}