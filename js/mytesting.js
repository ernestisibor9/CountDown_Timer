let myDiv = document.getElementById('myDiv')
    myDiv.style.backgroundColor = 'yellow'
    myDiv.style.border = '2px solid black'
    myDiv.style.width = "50%"
    myDiv.style.marginTop = '250px'
    myDiv.style.marginLeft = '400px'
    myDiv.style.textAlign = 'center'
    //console.log(myDiv);

let myhead = document.createElement('h4')
    myhead.id = 'heading'
    myhead.appendChild(document.createTextNode('My header'))
    console.log(myhead);


let home = document.querySelector('#home')
    home.style.color = 'green'
    
let lorem = document.querySelector('.lorem')
    lorem.style.color = 'blue'

const newLink = document.createElement('a')
      newLink.className = 'myLink'
      newLink.setAttribute('href', 'index.html')
      newLink.appendChild(document.createTextNode('Read more'))
      console.log(newLink);
myDiv.appendChild(newLink)

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput')
const btn = document.getElementById('btn')
      btn.addEventListener('click', function() {
            if(searchInput.value.length ==  0){
                alert('Enter your password')
            }
      })
      searchForm.addEventListener('click', function(e) {
          e.preventDefault()
          console.log(searchInput.value);
          //alert('Form clicked')
      })

let names = []
names.push('Isibor')
names.push('Ernest')
names.push('Peter')
JSON.parse(localStorage.getItem(names))
JSON.stringify(localStorage.setItem(names))

// const name = localStorage.getItem('name')
// console.log(name)

const myArray = ['1','2','3']
console.log(myArray);
console.log(JSON.stringify(myArray));
