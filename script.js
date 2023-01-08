const scriptURL = 'https://script.google.com/macros/s/AKfycbwBMrZBMps29zhDfYR0EOQYzAOPAOBLzUnvv0utAGjh1a1SsFDaA0SP4ZKsp0iDqrWT/exec'
const form = document.forms['portfolio-contact-form']
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
e.preventDefault()
/* 
Ketika Tombol Submit di Click 
Munculkan tombol loading dan hilangkan tombol submit 
*/
btnLoading.classList.toggle('d-none');
btnSubmit.classList.toggle('d-none');
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    // Munculkan tombol submit dan hilangkan tombol loading 
    btnLoading.classList.toggle('d-none');
    btnSubmit.classList.toggle('d-none');
    // Munculkan Alert
    myAlert.classList.toggle('d-none');
    // Reset Form
    form.reset();
    console.log('Success!', response)
    })
    .catch(error => console.error('Error!', error.message))
})

// Remove URL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});