//1

console.log(document.querySelector('#content'));

//2

console.log(document.querySelectorAll('#content'));

//3

console.log(document.querySelector('.important'));

//4

console.log(document.querySelectorAll('.important'));

//5

let li = document.querySelectorAll('li');

li.forEach(element => {
    console.log(element.textContent.slice(0, element.textContent.length-1) + element.textContent.charAt(element.textContent.length - 1).toUpperCase());
});

//6

console.log(document.getElementById('content').getElementsByClassName('grandParagraphe')[0]);