$(document).foundation();

// Unify content column heights
var height_of_left = $('#left-col').outerHeight();
var height_of_right = $('#right-col').outerHeight();
if (height_of_left > height_of_right) { 
	height_of_tallest = height_of_left;
} else {
	height_of_tallest = height_of_right;
}
$('#right-col').css('height', height_of_tallest);

// Clone sidebar to off-canvas location for mobile
var $clonenav = $('#sideNav').clone();
$("#sideMenu").append($clonenav);

// Clone logo to top location for mobile
var $cloneidentity = $('#identitySide').clone();
$("#identityTop").append($cloneidentity);

// Scroll to top
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});