const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(addUser) {
    addUser.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('Error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));
        username = nameInput.value;
        useremail = emailInput.value;

        userList.appendChild(li);
        // Storing Data
        var name = localStorage.setItem('username', username);
        var email = localStorage.setItem('useremail', useremail);
        const obj = {
            username,
            useremail,
        }
        localStorage.setItem(obj.useremail, JSON.stringify(obj));


        // Retrieving Data
        var name = localStorage.getItem('username', username);
        var email = localStorage.getItem('useremail', useremail);
        



        // Clear field
        nameInput.value = '';
        emailInput.value = '';
    }
}