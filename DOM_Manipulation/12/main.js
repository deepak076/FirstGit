const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#users");
const phoneInput = document.querySelector("#phone");

const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

storedUsers.forEach(user => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('${user.name}:${user.email}-${user.phone}'));
    userlist.appendChild(li);
    
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '' || phoneInput === ''){
        msg.classList.add('error');
        msg.textContent='please enter all the fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        const newUser = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };

        const userKey = `user_${Date.now()}`;

        localStorage.setItem('userKey',JSON.stringify(newUser));
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}-${phoneInput.value}`));
        userlist.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
    }
}
