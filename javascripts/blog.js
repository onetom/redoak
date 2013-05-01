$(document).foundation();

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