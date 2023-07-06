//form submit event
document.getElementById('form').addEventListener('submit',addItem);
//Delete event
document.getElementById('items').addEventListener('click',handleItemClick);
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);

//add Item
function addItem(e){
    e.preventDefault();

    //get input values
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;
    if(newItem === ''){
        alert('Please enter  an item');
        return;
    }
    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input values
    li.appendChild(document.createTextNode(newItem + '-' + newDescription));
    


    //create del element
    var deleteBtn =  document.createElement('button');
    //add classes to del button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
      //append button to li 
      li.appendChild(deleteBtn);

     //create edit button
     var editBtn = document.createElement('button');
     editBtn.className = 'btn btn-primary btn-sm float-right edit';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);

  
    //append li to list
    document.getElementById('items').appendChild(li);

    document.getElementById('items').value = '';
    document.getElementById('description').value = '';
}

//remove item
function handleItemClick(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            li.remove();
        }
    } else if(e.target.classList.contains('edit')){
        console.log('edit button clicked');
    }
}

//filteritems

function filterItems(e){
    //convert 
    var text= e.target.value.toLowerCase();
    var itemList = document.getElementById('items').getElementsByTagName('li');
    Array.from(itemList).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}
