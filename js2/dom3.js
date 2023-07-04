var items= document.getElementsByClassName('class-list');
console.log(items);
console.log(items[0]);
items[0].textContent =  'hello 2';
items[0].style.fontWeight = 'bold';
items[0].style.backgroundColor = 'yellow';

var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);

for(var i = 0;i<li.length; i++){
    li[i].style.backgroundColor = 'f4f4f4';
    li[i].style.fontWeight = 'bold';
}
