const container=document.getElementById("logid");
const userlabel=document.createElement("label");
const userinput=document.createElement("input");
userinput.setAttribute("placeholder","yyy@xx.com")
userlable.innerHTML="Username";
container.appendChild(userlabel);
container.appendChild(userinput);

const pswdlable=document.createElement("label");
const pswdinput=document.createElement("input");
pswdinput.setAttribute("placeholder","********");
pswdinput.setAttribute("type","password");
pswdlable.innerHTML="password";
container.appendChild(pswdlable);
container.appendChild(pswdinput);
 
const btn=document.createElement("button");
btn.innerHTML="Login";
container.appendChild(btn);

btn.addEventListener("click",show);
function show(){
    let password=pswdinput.value;
    let username=userinput.value;

    var mailFormat=/^\w+([/.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var passfo = /^\w+([/.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(username.match(mailFormat) && password.match(passfo)){

        console.log("VALidae")

    }
    else{
        alert("invalid")
        return false;
    }
    alert("username"+username+"\n"+"password"+password);
}