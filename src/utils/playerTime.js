class playerTime {
  currentTime = () => {
    return new Date().getTime();
  };
  checkTime = (startTime) => {
    const timeInMilisec = this.currentTime() - startTime;
    return (timeInMilisec / 1000).toFixed(0);
  };
  videoId = (currentVideo) => {
    return currentVideo.url.slice(currentVideo.url.length - 11);
  };
}

export default new playerTime();
