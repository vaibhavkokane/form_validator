// contant variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// shows error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// shows success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// verify the structure of email id
function isValidEmail(email) {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let result = expression.test(String((email.value).trim()).toLowerCase());
    if(result) showSuccess(email);
    else  showError(email,'Enter valid email id !'); 
}

// is required validation
function checkRequired(inputArr,message) {
    for (let i = 0; i < inputArr.length; i++) {
        if((inputArr[i].value).trim() === '') {
            showError(inputArr[i],`${message[i]} is Required !`);
        } else {
            if(inputArr[i] === email) isValidEmail(inputArr[i]); 
            else showSuccess(inputArr[i]);
        }
    }       
}

// validation for password match
function passwordMatch(pwd,confirmPwd) {
    if((pwd.value !== "" && confirmPwd !== "")) { 
        if(pwd.value !== confirmPwd.value) showError(confirmPwd,'Password must match!');
        else showSuccess(confirmPwd);
    }
}

// validation for minimum length of username and password
function minimumLength(input,min,max) {
    if(input.value !== "") {
        if(input.value.length < min) showError(input,` ${input.id} must be greater than ${min} character !`);
        else if(input.value.length > max) showError(input,` must be less than ${max} character !`);
        else showSuccess(input);
    }
}

// event on button click
form.addEventListener('submit',function(e) {
    e.preventDefault();
    let min = 3;
    let minPwd = 6;
    let max = 16;
    elements = [username,email,password,password2];
    messages = ['Username','Email','Password','Confirm_Password'];
    checkRequired(elements,messages);
    minimumLength(username,min,max);
    minimumLength(password,minPwd,max);
    passwordMatch(password,password2);

});