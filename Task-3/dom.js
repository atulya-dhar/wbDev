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

var additemBold = document.getElementsByClassName('title')
console.log(additemBold);
//additemBold.style.color = 'green';
