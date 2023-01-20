//Parallax

let bg = document.querySelector('.mouse-parallax__content');
let p1 = document.querySelector('.mouse-parallax__p1');
let p2 = document.querySelector('.mouse-parallax__p2');
let p3 = document.querySelector('.mouse-parallax__p3');
let p4 = document.querySelector('.mouse-parallax__p4');
let p5 = document.querySelector('.mouse-parallax__p5');
let p6 = document.querySelector('.mouse-parallax__p6');
let p7 = document.querySelector('.mouse-parallax__p7');
let p8 = document.querySelector('.mouse-parallax__p8');
let p9 = document.querySelector('.mouse-parallax__p9');
let p10 = document.querySelector('.mouse-parallax__p10');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight; 
    let z 
    // bg.style.transform = 'translate(' + x * 100 + 'px, -' + y * 100 + 'px)';
    p1.style.transform = 'translate(' + x * 80 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * 40 + 'deg)';
    // p1.style.transform = 
    p2.style.transform = 'translate(' + x * 10 + 'px, -' + y * 5 + 'px)' + 'rotate(' + x * -20 + 'deg)';
    p3.style.transform = 'translate(' + x * 20 + 'px, -' + y * 20 + 'px)' + 'rotate(' + x * 10 + 'deg)';
    p4.style.transform = 'translate(' + x * 10 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * -60 + 'deg)';
    p5.style.transform = 'translate(' + x * 30 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * -120 + 'deg)';
    p6.style.transform = 'translate(' + x * 50 + 'px, -' + y * 5 + 'px)' + 'rotate(' + x * 160 + 'deg)';
    p7.style.transform = 'translate(' + x * 30 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * -120 + 'deg)';
    p8.style.transform = 'translate(' + x * 30 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * 270 + 'deg)';
    p9.style.transform = 'translate(' + x * 5 + 'px, -' + y * 40 + 'px)' + 'rotate(' + x * 105 + 'deg)';
    p10.style.transform = 'translate(' + x * 30 + 'px, -' + y * 10 + 'px)' + 'rotate(' + x * -20 + 'deg)';
});
