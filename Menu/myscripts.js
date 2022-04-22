function imgSlider(anything) {
    document.querySelector('.content__starbucks').src = anything;
}

function changCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeTextColor(color) {
    const learnMore = document.querySelector('.starbucks');
    learnMore.style.color = color;
}

function changeButtonColor(color) {
    const button = document.querySelector('.button');
    button.style.background = color;
}

function toggleMenu() {
    var toggleMenu = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active')
    toggleMenu.classList.toggle('active')
}