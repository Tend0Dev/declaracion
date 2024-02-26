const yesbtn = document.querySelector('#yesbtn');


// link de la musica para dedicar, puedes cambiarla
yesbtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si mi cielo <3');
    location.href ='https://www.youtube.com/watch?v=KN8jLId7B94'
});

const nobtn = document.querySelector('#nobtn');

nobtn.addEventListener('mouseover', function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobtn.style.setProperty('top',randomY+'%');
    nobtn.style.setProperty('left',randomX+'%');
    nobtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})