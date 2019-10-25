var progressBar = document.getElementById('progressBar');
var progressCaption = document.getElementById('progressCaption');

document.addEventListener("DOMContentLoaded", function() {
    progressCaption.innerHTML= '0 %';
});

window.addEventListener('scroll', function () {
    var dheight = document.documentElement.scrollHeight;     
    var wscrollY = window.scrollY;
    var perc = wscrollY / (dheight - this.window.innerHeight) * 100 ;
    var percRound = Math.round(perc);
    progressBar.style.width = percRound + '%';
    progressCaption.innerHTML= `${percRound} %`;
});