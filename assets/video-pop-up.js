$(document).ready(function() { 
// Watch More Link click handlers
    const $popup = $('.video-popup');
    const $modal = $('#modal');
    const $closeIcon = $('.close');
    const $watchMoreLink = $('.watch-more');
    var youTubeUrl = $('.video-container iframe').attr('src');

    $watchMoreLink.click(function(e) {
        $popup.fadeIn(200);
        $modal.fadeIn(200);
        e.preventDefault();
        $('body').addClass('overlay-active');
       $(this).closest('.video-container iframe').attr('src', youTubeUrl);
    });
    $closeIcon.click(function () {
        $popup.fadeOut(200);
        $modal.fadeOut(200);
       $('body').removeClass('overlay-active');
       $(this).closest('.video-container iframe').attr('src', '');
    });
    // for escape key
    $(document).on('keyup',function(e) {
        if (e.key === "Escape") {
           $popup.fadeOut(200);
           $modal.fadeOut(200);
        }
    });
    // click outside of the popup, close it
    $modal.on('click', function(e){
        $popup.fadeOut(200);
        $modal.fadeOut(200);
       $('body').removeClass('overlay-active');
    });
});