// const addBtn = document.getElementById('add');
// const removeBtn = document.getElementById('remove');
// const results = document.getElementById('results');

// addBtn.addEventListener('click', addItem => {
//  const inputV = document.getElementById('InputValue');
//     const List = document.createElement('li');
//     List.innerHTML += `Item:${inputV.value}`;
//     console.log(inputV.value)
//     List.append(List.value)
// })

// function () {
   
// }


const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');

addBtn.addEventListener('click', addItem);

function addItem() {
    const inputValue = document.getElementById('InputValue').value;

    if (inputValue.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = `Item: ${inputValue}`;
        list.appendChild(listItem);
        console.log(inputValue);

        // Clear the input field after adding the item
        // document.getElementById('InputValue').value = '';
    } else {
        // Handle the case where the input is empty
        alert('Please enter a value before adding.');
    }
}
