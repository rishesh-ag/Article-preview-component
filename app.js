let submit_btn = document.querySelector(".icon2");
let detail = document.querySelector('#detail');
let share = document.querySelector('#share');
let info = document.querySelector('.info');
let traingle = document.querySelector('#traingle');
var isShare = false;

submit_btn.addEventListener('click', function(){
    if(!isShare){
        isShare = !isShare;
        share.classList.remove('hide');
        if(document.body.clientWidth < 768){
            info.style.background = 'hsl(217, 19%, 35%)';
            detail.classList.add('hide');
        }
        else{
            traingle.classList.remove('hide');
        }
        submit_btn.src = './images/icon-share-white.svg';
        submit_btn.style.background = 'hsl(214, 17%, 51%)'
    }
    else {
        isShare = !isShare;
        share.classList.add('hide');
        if(document.body.clientWidth < 768){
            detail.classList.remove('hide');
            info.style.background = 'white'
        }
        else{
            traingle.classList.add('hide')
        }
        submit_btn.src = './images/icon-share.svg';
        submit_btn.style.background = 'hsl(210, 46%, 95%)'
    }
});