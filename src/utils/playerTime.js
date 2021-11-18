class playerTime {
  currentTime = () => {
    return new Date().getTime();
  };
  setTime = (videoId) => {
    // if (!playerStorage && playerStorage.videoId !== videoId) {
    console.log("X");
    localStorage.setItem(
      "playerStorage",
      JSON.stringify({
        videoId: videoId,
        startTime: this.currentTime(),
      })
    );
  };
  deleteTime = () => {
    localStorage.removeItem("playerStorage");
  };
  checkTime = (startTime) => {
    if (startTime) {
      const timeInMilisec = this.currentTime() - startTime;
      return ((timeInMilisec % 60000) / 1000).toFixed(0);
    }
  };
}

export default new playerTime();
