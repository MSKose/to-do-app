const container = document.querySelector('#container');
const addBtn = document.querySelector('#button-addon1');
const textAdder = document.querySelector('#textAdder');



addBtn.addEventListener('click', adderFunc)


function adderFunc() {
    if (!textAdder.value) return alert(`please add a to-do item first`)

    const listCon = document.querySelector('#list-container')
    const x = document.createElement('a');
    listCon.appendChild(x)

    listCon.innerHTML += `<a href="#" class="list-group-item list-group-item-action d-flex m-auto">
    <input id="btncheck1" class="form-check-input mt-auto mb-auto" type="checkbox" value="" aria-label="Checkbox for following text input">
    <p class="m-auto fs-5 text-capitalize overflow-auto" id="textP">${textAdder.value}</p>
    <button type="button" class="btn btn-danger" id="removeBtn">Remove</button>
  </a>`
    textAdder.value = ''


    // const doneBtn = document.querySelector('#btncheck1');
    const textTodo = document.querySelector('#textP');
    const listItems = document.querySelector('#itemDivs');
    // const removeBtn = document.querySelector('#removeBtn');

    document.querySelectorAll('#removeBtn').forEach(i => {
        i.addEventListener('click', e => {
           if (confirm(`The item will be deleted, are you sure?`)) {
            e.target.parentElement.remove()
           }
        })
    })

    // document.querySelectorAll('#btncheck1').forEach(j =>{
    //     j.addEventListener('click', e => {
    //      if (e.target.parentElement.querySelector('#textP').style.textDecoration = null){
    //       e.target.parentElement.querySelector('#textP').style.textDecoration = 'line-through'
    //      }
        
    //     })
    // })

    
    // removeBtn.addEventListener('click', (e) => {
        // const listItems = document.querySelector('#itemDivs');
        // console.log(listItems);
        // console.log(listItems.closest('#container'));
        // listItems.closest('#container').removeChild(listItems)
        // console.log(e);

        // console.log(e.target.parentElement);
    // e.target.parentElement.remove()
    // }) 

}
