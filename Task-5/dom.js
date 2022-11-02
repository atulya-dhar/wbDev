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
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'The Herald'
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
header.style.borderBottom = 'solid 3px #000';

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
var items = document.getElementsByClassName('new-item');
items[0].textContent = "Nike"

// Editing Item-5 using getElementByTagName
var li = document.getElementsByTagName('li');
li[4].textContent = 'Adidas'
console.log(li);
