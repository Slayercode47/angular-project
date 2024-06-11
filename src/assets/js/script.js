const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let isLoggedIn = sessionStorage.getItem("isLoggedIn");
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    if (isLoggedIn == "true") {
        container.classList.remove("right-panel-active");
    }
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


// var downArrow = document.getElementById("btn1");
// var upArrow = document.getElementById("btn2");

// downArrow.onclick = function () {
//     'use strict';
//     document.getElementById("first-list").style = "top:-620px";
//     document.getElementById("second-list").style = "top:-620px";
//     downArrow.style = "display:none";
//     upArrow.style = "display:block";
// };

// upArrow.onclick = function () {
//     'use strict';
//     document.getElementById("first-list").style = "top:0";
//     document.getElementById("second-list").style = "top:80px";
//     upArrow.style = "display:none";
//     downArrow.style = "display:block";
// };

