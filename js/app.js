
let email = document.getElementById("email");
let password = document.getElementById("password")
let loginEmail = document.getElementById("loginemail")
let loginPassword = document.getElementById("loginpassword")

function signUp() {
    console.log(email.value, password.value);

    localStorage.setItem('signupemail', email.value);
    localStorage.setItem('signuppassword', password.value)

    window.location.href = "login.html"

}
let signupBtn = document.getElementById("signup");
let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let profileImg = document.getElementById("profile")

// logoutBtn.style.display = "none";

let localEmail = localStorage.getItem("signupemail")
let localPassword = localStorage.getItem("signuppassword")

if (localEmail === null && localPassword === null) {
    
    logoutBtn.style.display = "none";
    profileImg.style.display = "none"

    
}else{
    
        loginBtn.style.display = "none"
        signupBtn.style.display = "none"
    
}




function login() {
    console.log(loginEmail.value, loginPassword.value);

    let lgemail = localStorage.getItem('signupemail')
    console.log(lgemail);
    let lgpassword = localStorage.getItem('signuppassword')
    console.log(lgpassword);


    if (lgemail === loginEmail.value && lgpassword === loginPassword.value) {
        alert("login success")
        window.location.href = "index.html"
    } else {
        alert("email and password not correct")
    }

}


function logout() {
    localStorage.removeItem("signupemail");
    localStorage.removeItem("signuppassword");

}