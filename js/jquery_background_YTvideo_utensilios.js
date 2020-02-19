jQuery(function ($) {
    $('.video-foreground').YTPlayer({
        fitToBackground: true,
        videoId: '1rYKdVeCuM4',
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            branding: 0,
            rel: 0,
            autohide: 0
        }
    });

    var videoCallbackEvents = function () {
        var player = $('.video-foreground').data('ytPlayer').player;

        player.addEventListener('onStateChange', function (event) {
            console.log("Player State Change", event);

            // OnStateChange Data
            if (event.data === 0) {
                console.log('video ended');
            }
            else if (event.data === 2) {
                console.log('paused');
            }
        });
    }
});