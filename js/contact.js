const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const successMsg = document.querySelector('.notification');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const subjectError = document.querySelector('#subject-error');
const messageError = document.querySelector('#message-error');

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
     e.preventDefault();

    let valid = true;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Full name is required.';
        valid = false;
    } else{
        nameError.textContent = ''
    }
    // email validation
     if (email.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!email.value.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        emailError.textContent = '';
    }
    // subject validation
     if (subject.value.trim() === '') {
        subjectError.textContent = 'Subject is required.';
        valid = false;
    } else {
        subjectError.textContent = ''
    }
     // Message validation
    if (message.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    valid = false;
    } else if (message.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    valid = false;
    } else {
    messageError.textContent = '';
    }

    if (valid) {
        successMsg.classList.add('show-notification');
        contactForm.reset();
        setTimeout(() => {
            successMsg.classList.remove('show-notification');
        }, 5000);
    }
});