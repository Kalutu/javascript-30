const slider = document.querySelector('.items')
let isDown = false
let startX;
let scrollLeft;

slider.addEventListener('mousedown', ()=>{
    isDown = true
})

slider.addEventListener('mouseleave', ()=>{
    isDown = false
})

slider.addEventListener('mouseup', ()=>{
    isDown = false   
})

slider.addEventListener('mousemove', ()=>{
    if(!isDown) return
    console.log(isDown)
    console.log('do work')
})