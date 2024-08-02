
function openLoginPage(){
    document.getElementById('login-fullpage').style.display="block";
    document.getElementById('signup-fullpage').style.display="none";
}
function openSignupPage(){
    document.getElementById('signup-fullpage').style.display="block";
    document.getElementById('login-fullpage').style.display="none";
}


// 'use strict';

// const nameInput=document.getElementById('name');
// const emailInput=document.getElementById('email');
// const mobileInput=document.getElementById('mobile');
// const passwordInput=document.getElementById('password');
// const confirmInput=document.getElementById('confirm');
// const btnSignupInput=document.getElementById('btn-signup');
// const userSignupForm=document.getElementById('signup-form');

// userSignupForm.addEventListener('submit',function(event){
// event.preventDefault();
// const Name=nameInput.value;
// const Email=emailInput.value;
// const Mobile=mobileInput.value;
// const Password=passwordInput.value;
// const ConfirmPassword=confirmInput.value;

// if(Name.length<=1){
//     nameInput.classList.add('not-eligible-1');
//     const headForm=nameInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.add('not-eligible');
// }
// else if(Name.length<=5){
//     const headForm=nameInput.parentElement;
//     const messageElement=headForm.querySelector('.message');
//     const labelContent=headForm.querySelector('.form-label');
//     messageElement.classList.add('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     nameInput.classList.remove('not-eligible-1');
//     nameInput.classList.remove('eligible-1');
//     labelContent.classList.remove('eligible');
// }
// else{
//     nameInput.classList.add('eligible-1');
//     const headForm=nameInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     labelContent.classList.add('eligible');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     nameInput.classList.remove('not-eligible-1');
// }
// if(Email.length<=0){
//     emailInput.classList.add('not-eligible-1');
//     const headForm=emailInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.add('not-eligible');
// }
// else if(Email.length<=9){
//     const headForm=emailInput.parentElement;
//     const messageElement=headForm.querySelector('.message');
//     const labelContent=headForm.querySelector('.form-label');
//     messageElement.classList.add('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     emailInput.classList.remove('not-eligible-1');
//     emailInput.classList.remove('eligible-1');
//     labelContent.classList.remove('eligible');
// }
// else{
//     emailInput.classList.add('eligible-1');
//     const headForm=emailInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     labelContent.classList.add('eligible');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     emailInput.classList.remove('not-eligible-1');
// }
// if(Mobile.length<=0){
//     mobileInput.classList.add('not-eligible-1');
//     const headForm=mobileInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.add('not-eligible');
// }
// else if(Mobile.length<=5){
//     const headForm=mobileInput.parentElement;
//     const messageElement=headForm.querySelector('.message');
//     const labelContent=headForm.querySelector('.form-label');
//     messageElement.classList.add('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     mobileInput.classList.remove('not-eligible-1');
//     mobileInput.classList.remove('eligible-1');
//     labelContent.classList.remove('eligible');
// }
// else{
//     mobileInput.classList.add('eligible-1');
//     const headForm=mobileInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     labelContent.classList.add('eligible');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     mobileInput.classList.remove('not-eligible-1');
// }
// if(Password.length<=0){
//     passwordInput.classList.add('not-eligible-1');
//     const headForm=passwordInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.add('not-eligible');
// }
// else if(Password.length<=5){
//     const headForm=passwordInput.parentElement;
//     const messageElement=headForm.querySelector('.message');
//     const labelContent=headForm.querySelector('.form-label');
//     messageElement.classList.add('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     passwordInput.classList.remove('not-eligible-1');
//     passwordInput.classList.remove('eligible-1');
//     labelContent.classList.remove('eligible');
// }
// else{
//     passwordInput.classList.add('eligible-1');
//     const headForm=passwordInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     labelContent.classList.add('eligible');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     passwordInput.classList.remove('not-eligible-1');
// }
// if(ConfirmPassword.length<=0){
//     confirmInput.classList.add('not-eligible-1');
//     const headForm= confirmInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.add('not-eligible');
// }
// else if(ConfirmPassword.length<=5){
//     const headForm=confirmInput.parentElement;
//     const messageElement=headForm.querySelector('.message');
//     const labelContent=headForm.querySelector('.form-label');
//     messageElement.classList.add('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     confirmInput.classList.remove('not-eligible-1');
//     confirmInput.classList.remove('eligible-1');
//     labelContent.classList.remove('eligible');
// }
// else{
//     confirmInput.classList.add('eligible-1');
//     const headForm=confirmInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     const messageElement=headForm.querySelector('.message');
//     labelContent.classList.add('eligible');
//     messageElement.classList.remove('not-eligible');
//     labelContent.classList.remove('not-eligible');
//     confirmInput.classList.remove('not-eligible-1');
// };
// if (passwordInput.value==confirmInput.value) {
//     confirmInput.classList.remove('not-eligible-1');
//     const headForm= confirmInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.remove('not-eligible');
// }
// else{
//     confirmInput.classList.add('not-eligible-1');
//     const headForm= confirmInput.parentElement;
//     const labelContent=headForm.querySelector('.form-label');
//     labelContent.classList.add('not-eligible');
//     alert("Confirm password doesn't match");
// }

// if (Name&&Email&&Mobile&&Password&&ConfirmPassword) {
//     alert("Your account created successfully");
// }
// else{
//     alert("All fields are Mandatory")
// }
// });








