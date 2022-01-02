//Variables
const myForm = document.getElementById('myForm')
const myTweet = document.getElementById('tweet')
const listTweet = document.getElementById('listTweet')


     




myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(myTweet.value);
    console.log('Good job done');


    //Printing L
    myForm.addEventListener('DOMContentLoaded')


    // Create the remove button
    const removeBtn = document.createElement('a')
          removeBtn.classList = 'removeTweet'
          removeBtn.textContent = 'X'

    // Add <li> element
    let tweet = myTweet.value;
    const li = document.createElement('li')
          li.textContent = tweet
          li.appendChild(removeBtn)

    listTweet.appendChild(li)


        //Delegation
        listTweet.addEventListener('click', function (e) {
            if(e.target.classList.contains('removeTweet')){
               // console.log('Yes it contains');
               e.target.parentElement.remove()
            }

        })
    
        addTweetLocalStorage(tweet)
    
})

//LocalStorage
function addTweetLocalStorage(tweet) {
   // console.log('I love football');
   let tweets = getTweetsStorage()
  // console.log(tweets);
  tweets.push(tweet);
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getTweetsStorage() {
    let tweets;
    if(localStorage.getItem('tweets') === null){
        tweets = []
    }
    else{
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}

