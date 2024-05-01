const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    const email = document.getElementById('inputEmail4').value;
    const emailerror = document.getElementById('emailerror');
    const password = document.getElementById('inputPassword4').value;
    const passworderror = document.getElementById('passworderror');
    const address = document.getElementById('inputAddress').value
    const addresserror = document.getElementById('addresserror')
    const city = document.getElementById('inputCity').value
    const cityerror = document.getElementById('cityerror')
    const zip = document.getElementById('inputZip').value
    const ziperror = document.getElementById('ziperror')

    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailcheck)) {
        e.preventDefault();
        emailerror.innerHTML = "Invalid email format";
    } else {
        emailerror.innerHTML = ""; 
    }

    if (password.length <= 8) { 
        e.preventDefault();
        passworderror.innerHTML = "Password must be at least 8 characters";
    } else {
        passworderror.innerHTML = ""; 
    }

    if(address=='' || address==null){
        e.preventDefault();
        addresserror.innerHTML="Address is required field"
    }else {
        addresserror.innerHTML = ""; 
    }

    if(city=='' || city==null){
        e.preventDefault();
        cityerror.innerHTML="City is required field"
    }else {
        cityerror.innerHTML = ""; 
    }

    if(zip=='' || zip==null){
        e.preventDefault();
        ziperror.innerHTML="Zip is required field"
    }else {
        ziperror.innerHTML = ""; 
    }
});
