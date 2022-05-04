const slides=document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click',()=> {
        closeSlideChanger();
        slide.classList.add('active');
    })
})

function closeSlideChanger() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}