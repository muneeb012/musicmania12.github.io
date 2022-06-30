var videos = document.getElementsByTagName("video");

function checkScroll() {
    var fraction = 0.8; // Play when 80% of the player is visible.

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                video.play();
            } else {
                video.pause();
            }

    }

}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);
var video = $("Video");
 
 var scrollToBtm = function() {
   $("html, body").animate({
    scrollTop: $('main').position().top // replace with whatever you want
   }, 4000);
};

video[0].onended = function() {
  scrollToBtm(); // call function on video.onended if you want
};