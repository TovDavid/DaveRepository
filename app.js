window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual') 

    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60d394']

    pads.forEach((pad, index) => {
        pad.addEventListener('click', ()=>{
            sounds[index].currentTime=0;
            sounds[index].play()
            createBuble(index);   
        })
    });
    const createBuble = (index) => {
        const bubble = document.createElement('div')
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
       bubble.style.animation = `jump${index} 2s ease-out`
    }
})