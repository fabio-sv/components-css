function slideShow(position) {
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    if(position > 0) {
        currentSlide >= 2 ? currentSlide = 0 : currentSlide++  
    }
    
    if(position < 0) {
        currentSlide <= 0 ? currentSlide = 2 : currentSlide--
    }

    slides[currentSlide].style.display = 'block'
}

let slides = document.querySelectorAll('.slide')
let currentSlide = 0
slideShow()