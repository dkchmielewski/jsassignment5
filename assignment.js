const task1 = document.getElementById('task-1');
const task2 = document.querySelector('#task-1');

task1.style.color = 'white';
task1.style.backgroundColor = 'black';

const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved!';

// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';