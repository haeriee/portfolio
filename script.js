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

const skillDiv = document.querySelector('#skills');
const barInner = document.getElementsByClassName('bar-inner');

window.addEventListener('scroll', function(){
    if(skillDiv.getBoundingClientRect().top < 0 ){
        for(let i = 0 ; i < barInner.length ; i ++) {
            barInner[i].style.width = `${barInner[i].parentElement.dataset.percent}%`
        }
    }
});

const blink = document.querySelector(".light");

document.addEventListener("mousemove", (e) => { 

    const mouseX = e.clientX ;

    const mouseY = e.clientY + window.scrollY;

    light.style.left = mouseX + 'px';

    light.style.top = mouseY + 'px';
});

const light = document.querySelector('.light');
const onMouseView = document.querySelector('.on-mouse-view');

window.addEventListener('monsemove', (e) => {
    onMouseView.style.clipPath = `ellipse(100px 100px at ${e. clientX-onMouseView.getBoundingClientRect().left}px ${e.clientY=window.screenY-onMouseView.getBoundingClientRect().top}px)`
    console.log(onMouseView.getBoundingClientRect().top)
});
