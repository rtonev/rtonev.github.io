(function() {
    var VideoModule = {
        init: function(){
            var video = document.querySelector("#video");
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

            if (navigator.getUserMedia) {
                navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
            }
        },

        handleVideo: function(stream) {
            video.src = window.URL.createObjectURL(stream);
        } ,

        videoError: function(e) {
            console.log("error connecting to video");
        }
    };

    $(document).ready(function() {
        VideoModule.init();
    });
})();