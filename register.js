'use strict';

const name1Input = document.getElementById('name');

const ageNameInput = document.getElementById('age');

const bloodTypeInput = document.getElementById('bloodGroup');

const mobile1Input = document.getElementById('mobileNo');

const email1Input = document.getElementById('email');

const genderInput = document.getElementById('gender');

const btnSubmit = document.getElementById('btn-submit');

const userForm = document.getElementById('user-register-form');
document.addEventListener("DOMContentLoaded",function(){
userForm.addEventListener('submit',function(event){
    event.preventDefault();

    const NameRegister = name1Input.value;
    const Age = ageNameInput.value;
    const BloodGroup = bloodTypeInput.value;
    const MobileRegister = mobile1Input.value;
    const EmailRegister = email1Input.value;
    const Gender = genderInput.value;
    const ButtonSubmit=btnSubmit.value;

    if(!NameRegister){
        name1Input.classList.add('error-1');
        const formControl = name1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(NameRegister.length<=5){
        alert("Your name is too short")
    }
    else{
        name1Input.classList.add('correct');
        const formControl = name1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Age){
        ageNameInput.classList.add('error-1');
        const formControl = ageNameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(Age <=18 || Age >=50){
        alert("Your not eligible to donate blood")
    }
    else{
        ageNameInput.classList.add('correct');
        const formControl = ageNameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!BloodGroup){
        bloodTypeInput.classList.add('error-1');
        const formControl = bloodTypeInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        bloodTypeInput.classList.add('correct');
        const formControl = bloodTypeInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!MobileRegister){
        mobile1Input.classList.add('error-1');
        const formControl = mobile1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(MobileRegister.length >= 11 || MobileRegister.length <=9){
        alert("Check your mobile number");
    }
    else{
        mobile1Input.classList.add('correct');
        const formControl = mobile1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!EmailRegister){
        email1Input.classList.add('error-1');
        const formControl = email1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        email1Input.classList.add('correct');
        const formControl = email1Input.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Gender){
        genderInput.classList.add('error-1');
        const formControl = genderInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        genderInput.classList.add('correct');
        const formControl = genderInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    
    if(NameRegister&&Age&&BloodGroup&&MobileRegister&&EmailRegister&&Gender){
        alert("Registered Successfully");
        window.location.href='index.html'
    }
    else{
        alert("All fields are mandatory");
        }
    });
});