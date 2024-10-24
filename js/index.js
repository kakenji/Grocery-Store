const menu = document.querySelector('.left-nav-bar');
const button = document.getElementById('menu-btn');
const currentDisplay = getComputedStyle(menu).width;
const container = document.querySelector('.container');



function openMenu(){
    if(currentDisplay === '0px'){
        menu.style.width = '400px';
        container.style.backdropFilter = '50px';
        document.addEventListener('click', closeMenuOutside);
    } else {
        closeMenu();
    }
}

function closeMenu(){
    menu.style.width = '0px';
    container.style.backdropFilter = '';
    document.removeEventListener('click', closeMenuOutside);
}

function closeMenuOutside(event){
    if(!menu.contains(event.target) && !button.contains(event.target)){
        closeMenu();
    }
}