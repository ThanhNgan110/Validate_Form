
const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password_confirmation');



form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};


const setSuccess = element => {
    const inputControl = element.parentElement;
    console.log(inputControl);
    const errorDisplay = inputControl.querySelector('.error');
    console.log(errorDisplay);

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const isEmailvalid = email => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);


};


const validateInputs = () => {

    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfirmed = confirmPassword.value.trim();

    if (fullnameValue === '') {
        setError(fullname, 'Fullname không được để rỗng');
    }
    else {
        setSuccess(fullname)

    }

    if (emailValue === '') {
        setError(email, 'Email không được rỗng');

    }
    else if (!isEmailvalid) {
        setError(email, 'Email không đúng định dạng');
    }
    else {
        setSuccess(email)

    }

    if (passwordValue === '') {
        setError(password, 'Password không được để rỗng');
    }
    else if (passwordValue.lenght < 8) {
        setError(password, 'Password tối thiểu ít nhất 8 ký tự ');

    }
    else {
        setSuccess(password);
    }

    if (passwordConfirmed === '') {
        setError(confirmPassword, 'Please enter confirm your password  ');

    }
    else if (passwordValue !== password) {
        setError(confirmPassword, 'Password incorrect');

    }
    else {
        setSuccess(confirmPassword);

    }
};

















