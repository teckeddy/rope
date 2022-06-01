'use strict'
//navigation
const navBar=document.querySelector('.menu');
const openNav=document.querySelector('.bx-menu');
const closeNav=document.querySelector('.bx-x');

openNav.addEventListener("click",()=>{
    
 navBar.classList.remove('close__nav')
 closeNav.classList.add('bx-display')
 openNav.classList.add('bx-close')
})
closeNav.addEventListener("click",()=>{
    closeNav.classList.remove('bx-display');
    navBar.classList.add('close__nav')
    openNav.classList.remove('bx-close')
    
})