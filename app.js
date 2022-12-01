const contactForm = document.querySelector("#kontaktForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const textarea = document.querySelector("#textarea");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("#errorMessage");


const setError = () => {
    errorMessage.classList.remove("d-none");
    return false;
}
const setSuccess = () => {
    errorMessage.classList.add("d-none");
    return true;
}

const isValidEmail = email => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
    return regEx.test(email.toLowerCase());
}

const isValidName = name => {
    const regExText = /^[a-öA-Ö\s\-]*$/; 
    return regExText.test(name);
}  

const validateName = () => {
    const nameValue = name.value.trim();

    if (nameValue === "" || nameValue.length < 2) {
        console.log("Ange ett giltigt för och efteramn");
        return setError();
    } else if (!isValidName(nameValue)) {
        console.log("Ange ett giltigt för och efteramn utan nummer");
        return setError();
    } else {
        setSuccess();
    }
}

const validateEmail = () => {       
    const emailValue = email.value.trim();      

    if(emailValue === "") {      
        console.log('Ange en emailadress')
        return setError();
    } else if(!isValidEmail(emailValue)) {      
        console.log('Ange en giltig emailadress')
        return setError();
    } else {
        return setSuccess();   
    }
}

const validatePhone = () => {
    const phoneValue = phoneNumber.value.trim();

    if(phoneValue === "") {
        console.log('Var god fyll i ett telefonnummer');
        return setError();
    } else {
        return setSuccess();
    }
}

const validateTextarea = () => {
    const textareaValue = textarea.value.trim();

    if(textareaValue === "") {
        console.log('Var god fyll i ditt ärende i textrutan');
        return setError();
    } else {
        return setSuccess();
    }

}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(validateName() == true &&
    validateEmail() == true &&
    validatePhone() == true &&
    validateTextarea() == true) {
        console.log('Tack för ditt meddelande! Vi återkommer så snart vi kan.')
        errorMessage.innerHTML = "Tack för ditt meddelande! Vi återkommer så snart vi kan.";
        errorMessage.style.color = "Green";
        return setSuccess();

    }
});




