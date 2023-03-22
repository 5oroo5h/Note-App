let $ = document

const inputElem = $.getElementById("note-app__input")
const colorBoxElem = $.querySelectorAll('.note-app-color__item')
const addBtnElem = $.querySelector('.button-add')
const deleteBtnElem = $.querySelector('.button-delete')
const noteTextContainerElem = $.querySelector('.notes-container')
const noteDivElem = $.querySelector('.note')
const noteTextElem = $.querySelector('.note__text')


function colorHandler(event) {
    let colorCode = event.target.style.backgroundColor
    inputElem.style.backgroundColor = colorCode
  
}
function noteDelete(event) {
    event.target.parentElement.remove()
}
function deleteHandler() {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
   
}



function addNewNote(event) {
    if(inputElem.value) {
      let newDivElem = $.createElement('div')
        let newPTextElem = $.createElement('p')

        newDivElem.className = 'note'
        newPTextElem.className = 'note__text'
        
        newPTextElem.addEventListener('click',noteDelete)
        newPTextElem.innerHTML = inputElem.value

        newDivElem.append(newPTextElem)
        noteTextContainerElem.append(newDivElem)
        inputElem.value = ''
        let mainColor = inputElem.style.backgroundColor

        newPTextElem.style.backgroundColor = mainColor  
    }
}





inputElem.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        if(inputElem.value){
            addNewNote()  
        }
    }
})

deleteBtnElem.addEventListener('click', deleteHandler)
addBtnElem.addEventListener('click', addNewNote)

colorBoxElem.forEach(function (colorItem) {
    colorItem.addEventListener('click', colorHandler)
})