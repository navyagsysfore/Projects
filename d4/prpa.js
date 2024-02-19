const queryString = window.location.search;
const urlParms= new URLSearchParms(queryString);

document.getElementsByTagId('firstname').textContent= urlParms.get('firstname');
document.getElementsByTagId('lastname').textContent= urlParms.get('lastname');
document.getElementsByTagId('middlename').textContent= urlParms.get('middlename');
document.getElementsByTagId('dob').textContent= urlParms.get('dob');
document.getElementsByTagId('email').textContent= urlParms.get('email');
document.getElementsByTagId('phone').textContent= urlParms.get('phone');
document.getElementsByTagId('gender').textContent= urlParms.get('gender');
document.getElementsByTagId('bloodgroup').textContent= urlParms.get('bloodgroup');
document.getElementsByTagId('comments').textContent= urlParms.get('comments');
