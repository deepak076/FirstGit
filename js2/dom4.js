var header = document.querySelector('#main-header');
header.style.borderBottom  = 'solid 4px #ccc';

var input= document.querySelector('input');
input.value = 'Hello World!';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item= document.querySelector('.list-group-item');
item.style.color = 'red';

var lasti= document.querySelector('.list-group-item:last-child');
lasti.style.color = 'blue';

// var secondi= document.querySelector('.list-group-item:nth-child(2)');
// secondi.style.background = 'green';

var thirdi= document.querySelector('.list-group-item:nth-child(3)');
thirdi.classList.add('invisible');

//queryselectorAll

var items = document.querySelectorAll('#items li');
    if (items.length > 1) {
      items[1].style.color = 'green';
    }

var odd= document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}

  
