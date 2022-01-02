const myForm = document.getElementById('myForm')
const myText = document.getElementById('myText')
const storage = document.getElementById('storage')
const btn = document.getElementById('btn')
const storedInput = localStorage.getItem('textInput')

if(storage){
    myText.textContent = storedInput
}


myForm.addEventListener('submit', function (e) {
    e.preventDefault()
})


storage.addEventListener('input', function (e) {
    e.preventDefault()
    myText.textContent = e.target.value
    //console.log( myText.textContent);
})

const saveToLocalStorage = ()=>{
    localStorage.setItem('textInput', myText.textContent)
}

// function saveToLocalStorage() {
//     localStorage.setItem('textInput', myText.textContent)
// }

 btn.addEventListener('click', saveToLocalStorage)