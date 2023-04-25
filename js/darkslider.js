const darkWrapper = document.querySelector('.dark-wrapper')

console.log(darkWrapper)


function sliderMover(value) {
    darkWrapper.style.transform = `translateX(${value}%)`
}