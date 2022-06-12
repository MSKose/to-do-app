const container = document.querySelector('#container');
const addBtn = document.querySelector('#button-addon1');
const textAdder = document.querySelector('#textAdder');



addBtn.addEventListener('click', adderFunc)


function adderFunc() {
    if (!textAdder.value) return alert(`please add a to-do item first`)

    const listCon = document.querySelector('#list-container')
    const x = document.createElement('a');
    listCon.appendChild(x)

    listCon.innerHTML += `<a href="#" class="list-group-item list-group-item-action d-flex m-auto" id="itemDivs">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
    <label class="btn btn-outline-success d-flex align-items-center" for="btncheck1">Done</label>
    <p class="m-auto fs-5 text-capitalize overflow-auto" id="textP">${textAdder.value}</p>
    <button type="button" class="btn btn-danger" id="removeBtn">Remove</button>
    </a>`
    textAdder.value = ''


    const doneBtn = document.querySelector('#btncheck1');
    const textTodo = document.querySelector('#textP');
    const removeBtn = document.querySelector('#removeBtn');
    const listItems = document.querySelector('#itemDivs');



    removeBtn.addEventListener('click', (e) => {
        // const listItems = document.querySelector('#itemDivs');
        // console.log(listItems);
        // console.log(listItems.closest('#container'));
        // listItems.closest('#container').removeChild(listItems)
        // console.log(e);

    e.target.parentElement.remove()
    }) 

}
