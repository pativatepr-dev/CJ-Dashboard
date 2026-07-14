function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle('i-dac Media Control Tower')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
