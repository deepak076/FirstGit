const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#users");
const phoneInput = document.querySelector("#phone");


const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

function renderUser() {
  axios.get("https://crudcrud.com/api/f3f5b334b8364078a322d41dbd465217/appointmentData")
    .then((response) => {
      const users = response.data;
      
      userlist.innerHTML = '';
      
      users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.name}:${user.email}:${user.phone}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';

        li.appendChild(deleteButton);
        li.appendChild(editButton);

        userlist.appendChild(li);

        deleteButton.addEventListener('click', () => onDelete(index));
        editButton.addEventListener('click', () => onEdit(index));
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

renderUser();



myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    msg.classList.add('error');
    msg.textContent = 'Please enter all the fields';
    setTimeout(() => msg.remove(), 3000);
  } else if (!emailInput.value.includes('@')) {
    msg.classList.add('error');
    msg.textContent = 'Please enter a valid email address';
    setTimeout(() => msg.remove(), 3000);
  }
  else {
    const newUser = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

    storedUsers.push(newUser);
    axios.post("https://crudcrud.com/api/f3f5b334b8364078a322d41dbd465217/appointmentData", newUser, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then((response) => {
      console.log(response);

      // After successful POST, you can render the updated user list if needed
      renderUser();
      
      // Clear form inputs
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
    })
    .catch((error) => {
      console.error(error);

      // Handle error gracefully, display error message to the user
      // ...
    });
  }
}

function onDelete(index) {
  storedUsers.splice(index, 1);
  localStorage.setItem('users', JSON.stringify(storedUsers));
  renderUser();
}

function onEdit(index){
    const user = storedUsers[index];
    nameInput.value = user.name;
    emailInput.value = user.email;
    phoneInput.value = user.phone;

    onDelete(index);
}




