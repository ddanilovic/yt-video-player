class playerTime {
  currentTime = () => {
    return new Date().getTime();
  };
  checkTime = (startTime) => {
    if (startTime !== 0) {
      const timeInMilisec = this.currentTime() - startTime;
      console.log("new", (timeInMilisec / 1000).toFixed(0));
      return ((timeInMilisec % 60000) / 1000).toFixed(0);
    }
  };
}

export default new playerTime();
