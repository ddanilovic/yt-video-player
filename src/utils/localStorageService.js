class LocalStorageService {
  save(urlData) {
    localStorage.setItem("allUrls", JSON.stringify(urlData));
  }

  get() {
    localStorage.getItem("allUrls");
  }
}

export default new LocalStorageService();
