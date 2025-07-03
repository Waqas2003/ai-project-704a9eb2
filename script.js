const name = localStorage.getItem('name');
document.querySelector('.greeting-card h2').innerHTML = `Hello, ${name}!`;