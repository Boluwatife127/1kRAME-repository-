var img = document.getElementById('img');

var slides = ['nite.jpg','forestnite.jpg',' standing.jpg', 'sharp.jpg', 'top.jpg', 'shiny.jpg', 'free.jpg','galaxsy.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="images/+slides[Start-1]+">";
   
}
setInterval(slider,10000);