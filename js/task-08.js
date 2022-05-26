const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const Email = formElements.email.value;
    const Password = formElements.password.value;

    if (Email.length === 0 || Password.length === 0) {
        alert("Всі поля повинні бути заповнені")
        return;
    }

    const formData = {
        Email,
        Password,
    }

    console.log(formData);

    formEl.reset()  
}