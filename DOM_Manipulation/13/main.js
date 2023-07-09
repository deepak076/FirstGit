const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#users");
const phoneInput = document.querySelector("#phone");

const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

storedUsers.forEach(user => {
  const li = document.createElement('li');
  li.textContent = `${user.name}:${user.email}:${user.phone}`;
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';
  li.appendChild(deleteButton);

  userlist.appendChild(li);
  const deleteButtons = document.querySelectorAll('.delete-btn');
  deleteButtons.forEach(deleteButton =>{
    deleteButton.addEventListener('click', onDelete);
  })
});

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    msg.classList.add('error');
    msg.textContent = 'Please enter all the fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

    storedUsers.push(newUser);

    localStorage.setItem('users', JSON.stringify(storedUsers));
    const li = document.createElement('li');
    li.textContent = `${nameInput.value}:${emailInput.value}:${phoneInput.value}`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';

    li.appendChild(deleteButton);

    userlist.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';

    deleteButton.addEventListener('click', onDelete); 
  }
}

function onDelete(e) {
  if (e.target.classList.contains('delete-btn')) {
    const li = e.target.parentElement;
    const userText = li.textContent;
    const userName = userText.split(':')[0].trim();

    li.remove();

    removeUser(userName);
  }
}

function removeUser(userName) {
  let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  const userIndex = storedUsers.findIndex(user => user.name.toLowerCase() === userName.toLowerCase());
  if (userIndex !== -1) {
    storedUsers.splice(userIndex, 1);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }
}
