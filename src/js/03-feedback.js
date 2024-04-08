const form = document.querySelector("form.feedback-form");

const formDataStr = localStorage.getItem("feedback-form-state");
if (formDataStr) {
    const formData = JSON.parse(formDataStr);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener("input", (ev) => {
    const data = {
        email: ev.target.elements.email.value,
        message: ev.target.elements.message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
});
