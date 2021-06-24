// JUST FOR BACKGROUND CHANGE
const toggle = document.querySelector('#ham hamRotate ham8');

const updateBackground = (event) => { 
document.body.classList.toggle('on');
}

toggle.addEventListener("click", () => document.body.classList.toggle('on') , false);

function navigate(){
    window.open("menu.html",'_self');
}