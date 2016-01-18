
// wow.js
new WOW().init();

// video
$(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});


// CSS3 Animation Cheat Sheet
$(window).scroll(function() {
  $('#js-graph').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+800) {
      $('.p-graph__bar').addClass("stretchRight");
    }
  });   
});


// about scroll
$(function(){
    function scrollToElment(to) {
    var root = document.documentElement;
    var styleScroll = root.style;
    var doScroll = function () {
      styleScroll.transition = styleScroll.webkitTransition = 'all 0s ease 0s';
      styleScroll.transform = styleScroll.webkitTransform = 'none';
      window.scrollTo(0, to.offsetTop);
      root.removeEventListener('transitionend', doScroll, false);
    };
    var scrollDistance = window.pageYOffset - Math.min(
      to.offsetTop,
      root.scrollHeight - window.innerHeight
    );
    root.addEventListener('transitionend', doScroll, false);
    styleScroll.transition = 'transform 1s ease-in-out';
    styleScroll.webkitTransition = '-webkit-transform 1s ease-in-out';
    styleScroll.transform = styleScroll.webkitTransform = 'translate3d(0, ' + scrollDistance + 'px, 0)';
  }
  document.getElementById('js-to-about').addEventListener('click', function () {
    scrollToElment(document.getElementById('js-about'));
  }, false);

});



















