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
        // Creating li element
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));
        username = nameInput.value;
        useremail = emailInput.value;
        
        // Creating Delete Button
        var deleteBtn = document.createElement('button');

        // Add class to delete button
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

        // Append textNode
        deleteBtn.appendChild(document.createTextNode('X'));

        // Append delete button to li
        li.appendChild(deleteBtn);

        // Appending li to list
        userList.appendChild(li);
        // Storing Data
        //var name = localStorage.setItem('username', username);
        //var email = localStorage.setItem('useremail', useremail);
        const obj = {
            username,
            useremail,
        }
        localStorage.setItem(obj.useremail, JSON.stringify(obj));


        // Retrieving Data
        //var name = localStorage.getItem('username', username);
        //var email = localStorage.getItem('useremail', useremail);

        // Remove item
        // function deleteItem(addUser){
        //     if(addUser.target.classList.contains('delete')) {
        //         if(confirm('Are you sure?')) {
        //             var li = addUser.target.parentElement;
        //             localStorage.removeItem(obj.useremail)
        //             itemList.removeChild(li);
        //         }
        //     }
        // }

        deleteBtn.onclick = () => {
            localStorage.removeItem(obj.useremail);
            userList.removeChild(li);
        }

        li.appendChild(deleteBtn);
        userList.appendChild(li);


        // Clear field
        nameInput.value = '';
        emailInput.value = '';
    }
}

