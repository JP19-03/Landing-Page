/* Navbar script */
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav');

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const check = document.querySelector('.check');
check.addEventListener('click', () => {
    let id = check.checked;
    console.log(id);
    if (id == true) {
        location.href = 'en/index.html';
    } else {
        location.href = '../index.html';
    }
    check.checked = id;
});