class MediaPlayer {
    constructor(video){
        this.video = video;
        this.plugins = video.plugins || [];
    }
    //Play
    play(){
        this.video.play();
    }
    //Pause
    pause(){
        this.video.pause();
    }
 
    togglePlay(){
        if(this.video.paused){
            this.video.play();
        }else{
            this.video.pause();
        }
    }
}

export default MediaPlayer;