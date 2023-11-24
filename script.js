
window.onload = function(){
document.getElementById("fadein").style.opacity = 1;
}
/* when load, change the opacity style to 1 to fadein. */

function CheckPassword (username1, password1){
    var user = 'Test1';
    var psw = 'Password123';
    if(username1.value.match(user) && password1.value.match(psw)){
        return true;
    }
    else if (!username1.value.match(user) && password1.value.match(psw)){
        alert('Incorrect Username! Retry again');
        return false;
    }
    else if (username1.value.match(user) && !password1.value.match(psw)){
        alert('Incorrect Password! Retry again');
        return false;
    }
    else{
        alert('Both wrong! Try again.')
        return false;
    }

}