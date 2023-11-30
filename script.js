
window.onload = function(){
document.getElementById("fadein").style.opacity = 1;
}
/* when load, change the opacity style to 1 to fadein. */

/*Below is the validation of LOGIN*/
function CheckPassword (username1, password1){
    var user = 'Test1';
    var psw = 'Password123';
    if(username1.value.match(user) && password1.value.match(psw)){ 
        location.href = "overview.html";
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
/*validation for confirmation of signing out*/
var button = document.getElementById("logoutbutton");
button.addEventListener('click' , function(){
    let isLogOut = window.confirm("Proceed to log out?") //user click yes returns true, else nth happens if false
    if (isLogOut === true){
        location.href = "index.html"
    }
})

/*Below is the validation and output the user input*/
let msg = []; /*  to store in an array*/

let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); //Default deny
    
    let accountNo = document.getElementById('BankNo').value;
    if (isNaN(accountNo) || accountNo.length !== 12) {
        alert("Enter a valid 12-digit account number.");
        return false;
    } 
    let amount = document.getElementById('Amount').value;
    if (amount.trim() == ''){
        alert("Enter a value more than $0!")
        return false
    }
    //these two below dont need validation, and only shd be done after checking above
    let paymentMthd = document.querySelector('input[name="paymentMthd"]:checked').value;
    msg.push(`Payment Method: ${paymentMthd}`);

    msg.push(`Account No.: ${accountNo}`);
    msg.push(`Amount transferred: $${amount}`);

    let TransferType = document.getElementById('TransferPurpose').value;
    msg.push(`Purpose of Transfer: ${TransferType}`);

    msg.push('Transaction ID: SGX32245392OCBCPX'); /*default ID*/

    document.getElementById('paymentRecipt').style.display = 'block'; //displays receipt once submitbtn
    document.getElementById('completeReq').innerHTML = msg.join('<br/><br/>');
    /*above combines the array into a string with the br as seperator*/

});

