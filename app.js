var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
//remove item from the list event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

//add item function
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}
//remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to remove the item?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter item function
function filterItems(e){
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}