const password = document.getElementById('passoword');
const icon  = document.getElementById('icon');

function showhide(){
    if(password.type === 'password'){
        password.setAttribute('type','text');
        icon.classList.add('hide')
    }
}
