$(document).ready(function(){
    var count = 0;
    var imgs = ["img/45c0a4a2937f3a5540c5550e2330afdd.jpg", "img/autumn_bench-HD.jpg", "img/car-wallpapers13.jpg", "img/fenyr-supersport-938.jpg", "img/hd-wallpaper-48.jpg", "img/ship-wallpapers-16.jpg"];
    var img = $("#landing");

    setInterval(function(){
        img.fadeOut(600, function(){
            img.css("background-image", "url("+imgs[count++]+")");
            img.fadeIn(600);
        });
        if (count == imgs.length){
            count = 0;
        }
    }, 3000);
}); 

