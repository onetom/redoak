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

/* Barley Editor Mode Only */
// Used for picking different photo album layouts
if ($('#album_tools').length > 0) {
	$('#album_tools a').on('click', function(e){
        e.preventDefault();
        var photo_album_chosen, photo_album_layout;
        photo_album_chosen = $(this).attr('data-album');
        photo_album_layout = $('#album-'+photo_album_chosen).html();
        $('#photo_album').empty().html(photo_album_layout);
        if (typeof BarleyTools != 'undefined') { BarleyTools('findImages'); }
    });
}