
var imgs = $(".header-slider ul img");

var n = 0;

function slideChanger(){
    
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
slideChanger();

$(".control_previous").click(function (){
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    slideChanger();
});

$(".control_next").click(function (){
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    slideChanger();
});