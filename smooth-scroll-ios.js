$(function(){

$(â€˜a[href*=#]â€˜).click(function() {

if (location.pathname.replace(/^\//,â€) == this.pathname.replace(/^\//,â€)
&& location.hostname == this.hostname) {

var $target = $(this.hash);

$target = $target.length && $target || $(â€˜[name=' + this.hash.slice(1) +']â€˜);

if ($target.length) {

var targetOffset = $target.offset().top;

$(â€˜html,bodyâ€™).animate({scrollTop: targetOffset}, {duration:1600,easing:â€™easeInOutExpoâ€™});

return false;

}

}

});

});
