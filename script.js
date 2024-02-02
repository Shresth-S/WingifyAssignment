let date = document.querySelector('.date');
let monthDropDown = document.querySelector(".month");
let yearDropDown = document.querySelector('.year');
let errorMsg = document.querySelector('.errorMsg');
let password = document.querySelector('.password');
let pswError = document.querySelector('.pswError'); 
let form = document.querySelector('.form');
let email = document.querySelector('.email');
let emailerror = document.querySelector('.emailError');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (let i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.textContent = months[i];
    monthDropDown.appendChild(option);
}

const currentYear = 2024;
for (let i = currentYear; i >= currentYear - 60; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearDropDown.appendChild(option);
}

date.addEventListener("input",()=> {
    const enteredDay = parseInt(date.value, 10);

    if (enteredDay > 31 || enteredDay < 1) {
        errorMsg.setAttribute("class", "visible");
    }
    else {
        errorMsg.setAttribute("class", "notVisible");
    }
});

password.addEventListener("input",()=> {
    const enteredPassword = password.value;
    console.log(enteredPassword);
    let flag = 0;
    for (let i = 0; i < enteredPassword.length; i++){
        if (enteredPassword[i] >= '0' && enteredPassword[i] <= '9'){
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        pswError.setAttribute("class", "visible");
    }
    else {
        pswError.setAttribute("class", "notVisible");
    }
});

email.addEventListener("input",()=> {
    const enteredmail = email.value;
    console.log(enteredmail);
    let flag = 0;
    for (let i = 0; i < enteredmail.length; i++){
        if (enteredmail[i] == '@'){
            flag = 1;
            break;
        }
    }
    if (flag == 0 || enteredmail[enteredmail.length-1]=='@') {
        emailerror.setAttribute("class", "visible");
    }
    else {
        emailerror.setAttribute("class", "notVisible");
    }
});


form.addEventListener("submit", (e)=> {
    e.preventDefault();
});
