const courses = document.querySelector('#courses')



courses.addEventListener('click', function (e) {
    e.preventDefault()
    if(e.target.classList.contains('buyMe')){
        console.log('Added');
    }
    //console.log('Added');
})

const foods = ['eba', 'ogi', 'rice']

foods.forEach((myfood, index)=>{
    console.log(myfood);
})

 foods.filter(()=>{
     console.log( foods[2]);
 })

 function myName(val) {
     return val
 }

 const love = myName(17)
 console.log(love);

 function name() {
     let a = 4 + myName(3)
     //return a
     console.log(a);
 }
 name()