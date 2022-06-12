const container = document.querySelector('#container');
const addBtn = document.querySelector('#button-addon1');
const textAdder = document.querySelector('#textAdder');

const doneBtn = document.querySelector('#btncheck1');
const textTodo = document.querySelector('#textP');
const removeBtn = document.querySelector('#removeBtn');

addBtn.addEventListener('click', () => {
    

    if (!textAdder.value) return alert(`please add a to-do item first`)

    else{
    container.innerHTML += `<a href="#" class="list-group-item list-group-item-action d-flex m-auto" id="itemDivs">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
    <label class="btn btn-outline-success d-flex align-items-center" for="btncheck1">Done</label>
    <p class="m-auto fs-5 text-capitalize overflow-auto" id="textP">${textAdder.value}</p>
    <button type="button" class="btn btn-danger" id="removeBtn">Remove</button>
    </a>`
    
    textAdder.value = ''

    }

    // remove()
})

// function remove() {
//     removeBtn.addEventListener('click', (e) => {
//         const listItems = document.querySelector('#itemDivs');
//         container.removeChild(listItems)
//     }) 
//     inputAdder()
    
// }


console.log(container);