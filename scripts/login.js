const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener("click", function(){
    const inputEmail = document.getElementById('inputEmail');
    const inputEmailValue = inputEmail.value;
    
    const inputPassword = document.getElementById('inputPassword');
    const inputPasswordValue = inputPassword.value;
    
    if(inputEmailValue == 'popy@gmail.com' && inputPasswordValue == 1234){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong Username or Password');
    }

});
