

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

// Excercise 61
const form = document.querySelector('form');
const list = document.querySelector("#list")
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    const newItem = document.createElement('li');
    newItem.innerText = "${quantityInput} ${productInput};
    list.append(newItem);
    productInput.value = "";
    quantityInput.value = "";

})