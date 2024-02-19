const container=document.getElementById("formid");
const label1=document.createElement("label");
const inputuser=document.createElement("input");
inputuser.setAttribute("placeholder","Enter your name");
label1.innerHTML="Username";
container.appendChild(label1);
container.appendChild(inputuser);

const label2=document.createElement("label");
label2.innerHTML="Password";
const inputpass=document.createElement("input");
inputpass.setAttribute("placeholder","");
container.appendChild(label2);
container.appendChild(inputpass);

const btn=document.createElement("button");
btn.innerHTML="Login to your";
container.appendChild(btn);
btn.addEventListener("click",myclickfunc);

function myclickfunc(){
    let Username=inneruser.value;
    let Password=inneruser.value;
    console.log("username:" +Username+"\n" +"password:" +Password);
}