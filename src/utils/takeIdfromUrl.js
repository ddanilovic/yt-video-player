class takeIdfromUrl {
  getId(url) {
    return url.slice(url.length - 11);
  }
}

export default new takeIdfromUrl();
