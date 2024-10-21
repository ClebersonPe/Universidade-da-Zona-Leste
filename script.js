
var buteco = document.querySelector('.setor2 .container .botaocurso .buteco');
var teste = document.querySelector('.teste')

buteco.addEventListener('click', ()=>{
    if(teste.style.display === "none" || teste.style.display === ""){
        teste.style.display = "block";
    }
    else{
        teste.style.display = "none";
    }
});

var gradu = document.querySelector('#gradu');
var info = document.querySelector('.info');

gradu.addEventListener('click', ()=>{
    if (info.style.display === "none" || info.style.display === ""){
        info.style.display = "block";
    }
    else{
        info.style.display = "none";
    }
});

var pos = document.querySelector('#pos');
var info2 = document.querySelector('.info2');

pos.addEventListener('click', ()=>{
    if (info2.style.display === "none" || info.style.display === ""){
        info2.style.display = "block";
    }
    else{
        info2.style.display = "none";
    }
});

var mestrado = document.querySelector('#mes');
var info3 = document.querySelector('.info3');

mestrado.addEventListener('click', ()=>{
    if (info3.style.display === "none" || info.style.display === ""){
        info3.style.display = "block";
    }
    else{
        info3.style.display = "none";
    }
});

var tec = document.querySelector('#tec');
var info4 = document.querySelector('.info4');

tec.addEventListener('click', ()=>{
    if (info4.style.display === "none" || info.style.display === ""){
        info4.style.display = "block";
    }
    else{
        info4.style.display = "none";
    }
});
