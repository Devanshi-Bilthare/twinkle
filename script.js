const openBtn = document.querySelector('.open-btn > i');
const closeBtn = document.querySelector('.close-btn');
const mobileBg = document.querySelector('.mobile-bg');

openBtn.addEventListener('click',function(){
    console.log("hello")
    mobileBg.style.transform = 'translateX(0)';
})

closeBtn.addEventListener('click',function(){
    mobileBg.style.transform = 'translateX(-100%)';
})


