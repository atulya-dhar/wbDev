var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create Edit button element
    var editBtn = document.createElement('button')

    // Add class to Edit button
    editBtn.className = 'btn btn-edit btn-sm float-right edit'

    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Append Edit button to li
    li.appendChild(editBtn);

    // Create Delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append delete button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
    console.log(itemList);
}

    // Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

