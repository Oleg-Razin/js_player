export const videoPlayerInit = () => {
    const videoPlayer = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop =document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoTimeTotal = document.querySelector('.video-time__total');
    const videoProgress = document.querySelector('.video-progress');

    const toggleIcon = ()=> {
        if(videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-play');
            videoButtonPlay.classList.add('fa-pause');
        }else {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        }
    };

    const stopPlay = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    };

    const togglePlay = ()=>{
        if(videoPlayer.paused){
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    };

    const addZero = n => n < 10 ? '0' + n : n;

    videoPlayer.addEventListener('click' , togglePlay);
    videoButtonPlay.addEventListener('click' , togglePlay);

    videoPlayer.addEventListener('play' ,  toggleIcon);
    videoPlayer.addEventListener('pause' ,  toggleIcon);

    videoButtonStop.addEventListener('click' , stopPlay);

    videoPlayer.addEventListener('timeupdate' , ()=>{
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;

        videoProgress.value = (currentTime/duration) * 100;

        console.log(currentTime);
        console.log(duration);

        let minutePased = Math.floor(currentTime/60);
        let secondesPased = Math.floor(currentTime % 60);

        let minuteTotal = Math.floor(duration/60);
        let secondesTotal = Math.floor(duration % 60);

        console.log(minutePased);
        console.log(secondesPased);

        videoTimePassed.textContent = `${addZero(minutePased)}:${addZero(secondesPased)}`;
        videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondesTotal)}`;

    });

    videoProgress.addEventListener('change' , ()=>{
        const duration = videoPlayer.duration;
        const value = videoProgress.value;

        videoPlayer.currentTime = (value * duration) / 100;
    })

};
