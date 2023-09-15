
document.getElementById('submit-button').addEventListener('click',function () {
    const userEmail = document.getElementById('email');
    const userEmailValue = userEmail.value;

    const userName = document.getElementById('name');
    const userNameValue = userName.value;

    const userPassword = document.getElementById('pass');
    const userPasswordValue = userPassword.value;
    
    if(userEmailValue == 'admin@gmail.com' && userNameValue == 'admin' && userPasswordValue == 123456)
    {
        window.location.href = "productsPasses.html";
    }
})
