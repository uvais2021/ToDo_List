
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');


addBtn.addEventListener('click', addItem);
function addItem() {
    const inputValue = document.getElementById('InputValue').value;

    if (inputValue.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = ` ${inputValue}`;
        list.appendChild(listItem);
        console.log(inputValue);
        document.getElementById('InputValue').value = '';
    } else {
 
        alert('Please enter a value before adding.');
    }
}

removeBtn.addEventListener('click',removeItem);
function removeItem(){
   
        if (list.lastChild) {
            list.removeChild(list.lastChild);
        } else {
            alert('The list is empty.');
        }
    }
