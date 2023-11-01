const btn = document.getElementById('btn');
const success = document.getElementById('success');
const dismiss = document.getElementById('dismiss');
const container = document.querySelector('.container');
const emailValue = document.getElementById('email');
const errorValue = document.getElementById('error');



btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
     const isValidEmail = emailRegex.test(emailValue.value);


    if( !(isValidEmail) || emailValue.value === ''){
        errorValue.innerText = 'valid email required';
        errorValue.classList.add('error');
        emailValue.classList.add('email');

        
    }else{
     emailValue.style.display ='block'
     success.style.display= 'block';
     container.style.display = 'none';

    }

})

dismiss.addEventListener('click', ()=>{
    success.style.display = 'none';
})