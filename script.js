const btn = document.getElementById('btn');
const success = document.getElementById('success');
const dismiss = document.getElementById('dismiss');
const container = document.querySelector('.container');





btn.addEventListener('click', (e)=>{
    e.preventDefault()
    success.style.display= 'block';
    container.style.display = 'none';

})

dismiss.addEventListener('click', ()=>{
    success.style.display = 'none';
})