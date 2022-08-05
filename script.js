const neon = document.getElementsByClassName('neon');

for(let i = 0 ; i < neon.length ; i ++){
    const neonText = neon[i].innerText;
    const neonColor = neon[i].dataset.neonColor;
    neon[i].innerHTML = `
    <p class="font-background" style="-webkit-text-stroke: 11px ${neonColor}; >${neonText}</p>
    <p class="font-front" style="-webkit-text-stroke: 5px ${neonColor};">${neonText}</p>
    <p class="light-bold" style="-webkit-text-stroke: 18px ${neonColor}33; ">${neonText}</p>
    <p class="hard-light" style="-webkit-text-stroke: 42px ${neonColor};">${neonText}</p>
    <p class="soft-light" style="-webkit-text-stroke: 18px ${neonColor};">${neonText}</p> 
    <p class="white" style="color: #ffffff;">${neonText}</p>  
    `
}

const skillDiv = document.querySelector('.skills');
const barInner = document.getElementsByClassName('bar-inner');

window.addEventListener('scroll', function(){
    if(skillDiv.getBoundingClientRect().top < 0 ){
        for(let i = 0 ; i < barInner.length ; i ++) {
            barInner[i].style.width = `${barInner[i].parentElement.dataset.percent}%`
        }
    }
});

const lightSection = document.getElementById('five');

const light = document.querySelector('.light');
const onMouseView = document.getElementsByClassName('on-mouse-view');

lightSection.addEventListener('mousemove', (e) => {
    console.log('작동중');
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY+window.scrollY}px`

    for(let i = 0 ; i < onMouseView.length; i++){
        onMouseView[i].style.clipPath = `ellipse(100px 100px at ${e.clientX-onMouseView[i].getBoundingClientRect().left}px ${e.clientY-onMouseView[i].getBoundingClientRect().top}px)`
    }

});

lightSection.addEventListener('mouseenter', ()=>{
    light.style.display= `block`

})

lightSection.addEventListener('mouseleave', ()=>{
    light.style.display= `none`
})
