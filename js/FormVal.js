const myForm = document.getElementById('myForm')
const to = document.getElementById('to')
const subject = document.getElementById('subject')
const messsage = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const resetBtn = document.getElementById('resetBtn')
const mySpin = document.getElementById('mySpin')
const mySpin2 = document.getElementById('mySpin2')

//sendBtn.disabled = true;


myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    //sendBtn.disabled = true;
    //console.log(sendBtn);
    //const mySpin = document.getElementById('myImage')
    mySpin.style.display = 'block'
    //settimeout
    setTimeout(function () {
        mySpin.style.display = 'none';
        mySpin2.style.display = 'block';
        //after 5secs
        setTimeout(function() {
            mySpin2.style.display = 'none';
            myForm.reset()
        }, 2000)
    }, 3000)
   
    //console.log(mySpin);
    
})

resetBtn.addEventListener('click', function () {
    console.log('Form reset');
    setTimeout(function () {
        mySpin.style.display = 'none'
    }, 1)
    myForm.reset()
})