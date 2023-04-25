let header = document.getElementById('header')

let nube1 = document.getElementById('nube1')
let transparente = document.getElementById('transparente')
let nube2 = document.getElementById('nube2')
let btn = document.getElementById('btn')
let viento = document.getElementById('viento')
let persona = document.getElementById('persona')


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    transparente.style.marginLeft =  value * 0.1 + 'px';
    nube1.style.left = value* -0.2  + 'px';
    nube2.style.left = value* -0.2  + 'px';
    btn.style.marginTop = value * 0.3 + 'px';
    viento.style.left = value* -0.1  + 'px';
    header.style.marginTop = value * 0.1 + 'px';
    persona.style.marginLeft = value* 0.2  + 'px';

})

const navigation = document.querySelector('nav')
document.querySelector('.menu').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}