class playerTime {
  setTime = (videoId, stopTime, sessionExitTime) => {
    localStorage.setItem(
      "playerStorage",
      JSON.stringify({
        videoId: videoId,
        stopTime: stopTime,
        sessionExitTime: sessionExitTime,
      })
    );
  };
  checkTime = () => {
    const now = new Date().getTime();

    const playerStorage = JSON.parse(localStorage.getItem("playerStorage"));

    if (playerStorage) {
      const sessionExitTime = new Date(playerStorage.sessionExitTime).getTime();
      const difference = now - sessionExitTime;
      const playTime = playerStorage.stopTime + difference;

      return playTime;
    }
  };
}

export default new playerTime();
