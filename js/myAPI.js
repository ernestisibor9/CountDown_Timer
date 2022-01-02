const data = [
    {
        "class":"Jss1",
        "school":"Sharon College"
    },
    {
        "class":"Jss2",
        "school":"Government College"
    },
    {
        "class":"Jss3",
        "school":"Mount Zion Academy"
    },
    {
        "class":"Sss1",
        "school":"Molan Schools"
    },
    {
        "class":"Sss2",
        "school":"King's College"
    },
    {
        "class":"Sss3",
        "school":"Eric Moore High School"
    }
]

let output = '';

data.forEach((sch)=>{
    output += `
        <h4>${sch.class}</h4>
        <h4>${sch.school}</h4>
    `
})

const result = document.querySelector('#result');
      result.innerHTML= output;
      result.className = 'my'
      console.log(result);


const myForm = document.getElementById('myForm')
const myClass = document.getElementById('sel');
//console.log(myClass);
// const myClass = document.getElementById('sel').value;
// if(myClass == "Sss3"){
//     console.log(myClass);
// }

myClass.addEventListener('click', function () {
    const selMan = myClass.value;
    //console.log(selMan);
    if(selMan == "Sss2"){
        alert('You are in SS 2')
    }
})

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
            
        // if(myClass == "Sss3"){
        //     console.log(myClass);
        // }
    
})