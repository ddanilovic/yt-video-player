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
  checkTime = () => {
    // if (playerStorage) {
    //   const playTime = this.currentTime() - playerStorage.startTime;
    //   return playTime;
    // }
  };
}

export default new playerTime();
