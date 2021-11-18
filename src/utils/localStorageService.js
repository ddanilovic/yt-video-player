class localStorageService {
  save(urlData) {
    localStorage.setItem("allUrls", JSON.stringify(urlData));
  }

  get() {
    localStorage.getItem("allUrls");
  }

  remove() {
    localStorage.removeItem("currentVideo");
  }
}

export default new localStorageService();
