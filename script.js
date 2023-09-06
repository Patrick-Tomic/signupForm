
const button = document.querySelector("#footerButton");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const form = document.querySelector("#content");
const error = document.querySelector("#error");
form.addEventListener("submit",(event)=>{
    event.preventDefault;
    error.innerHTML='';
    const required = form.querySelectorAll('[required');
    required.forEach((field)=>{
        if(field.value.trim()===''){
            const fieldName = field.getAttribute('name');
            const errorMessage = document.createElement('p');
            errorMessage.textContent - '${fieldname} is required';
            errorMessage.appendChild;
        }
    })
})