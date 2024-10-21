var menu_icon = document.querySelector('.menu_icon');
var nav = document.querySelector('.fundo .container nav .navegacao')

menu_icon.addEventListener('click', ()=>{
    
    if (nav.classList.contains('ativo')){
        nav.classList.remove('ativo');
        document.querySelector('.menu_icon img').src = 'img/menu.png';
    }
    else{
        nav.classList.add('ativo');
        document.querySelector('.menu_icon img').src = 'img/close.png';
    }
    

})

