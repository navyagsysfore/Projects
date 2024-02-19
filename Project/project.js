const dataEntry = document.querySelector("#de");

//labels js variable
const userLabel = document.createElement("label");
const passLabel = document.createElement("label");

//input js variable
const inputUser = document.createElement("input");
const inputPass = document.createElement("input");

//username label
userLabel.innerHTML="Username";
dataEntry.appendChild(userLabel);
//input user
dataEntry.appendChild(inputUser);
inputUser.setAttribute("type", "email");
inputUser.setAttribute("placeholder", "Enter your email");

//password label
passLabel.innerHTML="Password";
dataEntry.appendChild(passLabel);
//input password
dataEntry.appendChild(inputPass);
inputPass.setAttribute("type", "password");
inputPass.setAttribute("placeholder", "Enter your password");

//console work
let name = inputUser.value;
let pass = inputPass.value;

//button js variable
const loginButton = document.createElement("button");

const database = {
    email:"navya@gmail.com",
    pass:"123456789" ,
}
//button calling it class btn so as to preserve the css
loginButton.innerHTML ="Login to your account";
dataEntry.appendChild(loginButton);
loginButton.setAttribute("type", "submit")
loginButton.setAttribute("class", "btn");
function displayUserName(){
 console.log(inputUser.value)

 let mailFormat= /^\w+([/.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 if (!inputUser.value.match(mailFormat))
 {
    alert("not valid email")
    return false
 }
 if(pass.length<=6 || pass===null  || pass==="")
 {
    alert("please enter strong password")
    return false
 }
 
}
loginButton.addEventListener("click",displayUserName);








