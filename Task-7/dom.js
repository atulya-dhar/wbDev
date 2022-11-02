// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.form[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'The Herald'
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//header.style.borderBottom = 'solid 3px #000';

// Making Add Items Bold and changing its font

//var additemBold = document.getElementsByClassName('title')
//console.log(additemBold);
//additemBold.innerText.style.

// GET ELEMENTS BY CLASSNAME
//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// If all the lists color has to be chaged we need to use for loop as it's an HTML Collection

// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
//     items[i].style.fontWeight = 'bold';            // made the list bold
// }
// items[2].style.backgroundColor = 'green';  // made the third element green

// GET ELEMENTS BY TAGNAME 
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// Editing Item-5 using getElementByClassName
//var items = document.getElementsByClassName('new-item');
//items[0].textContent = 'Nike'

// Editing Item-5 using getElementByTagName
//var li = document.getElementsByTagName('li');
//li[4].textContent = 'Adidas'
//console.log(li);

// QUERYSELECTOR 
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)')
// thirdItem.style.display = 'none';
// QUERY SELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0;i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
// }

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0;i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// var secondItem = document.querySelectorAll('.list-group-item:nth-child(2)');
// console.log(secondItem);
//secondItem.outerText.style.color = 'green';  // not able to change font color of second item

// var li = document.querySelectorAll('li');

// for(var i = 0; i < li.length; i++) {
//     li[1].style.color = 'green';
// }

// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// parentode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].getElementsByClassName.background = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
//console.log(itemList.lastChild);
// firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// Create Element

// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1'

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

// Create Li element

var li = document.createElement('li')

li.className = 'list-group-item';

// Create li text node

var liText = document.createTextNode('Hello World')

li.appendChild(liText);

var newListItem = document.querySelector('.list-group');
var liList = document.querySelector('.list-group-item');

console.log(newListItem)

newListItem.insertBefore(li, liList);
