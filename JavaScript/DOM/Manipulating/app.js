const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }
document.querySelector("span").innerText = 'Disgusting';
document.querySelector("span").innerHTML = 'Disgusting';
//CSS attribute selector
document.querySelector('input[type="text"]').setAttribute;
//practice 54
document.querySelector('img').setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg')
document.querySelector('img').setAttribute('alt', 'chicken')
document.querySelector('img').style.testAlign = center

document.querySelector('#container').style.
    window.getComputedStyle(allLinks).fontSize;

// practice 56
let i = 0;
const allSpans = document.querySelectorAll('span');
for (let span of allSpans) {
    span.style.color = colors[i];
    i++;
}

allLinks.classList.
// Practice 57
const Alllines = document.querySelectorAll('li');
for (let line of Alllines) {
    line.classList.toggle('highlight');
}
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

//////////
document.body.appendChild(newElement)
const newH3 = document.createElement('h3');
newHs.innerText = 'I am new!';
cosnt p = document.querySelector('p');

p.append('i am next ', 'anothertext');
h1.insertAdjacentElement('afterend', h2)


///// Practice 58 ///////////
const div=document.querySelector('.container')

while (i < 100) {
    let btn = document.createElement('btn');
    btn.innerHTML = 'Hey!';
    div.appendChild(btn);
}
