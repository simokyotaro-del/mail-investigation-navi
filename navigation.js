const mailApp = detectMailApp(text);

const guide = createMailGuide(mailApp);

const suspiciousWords = detectDangerWords(text);

document.getElementById("appResult").innerText = guide;

if(suspiciousWords.length > 0){

  document.getElementById("appResult").innerText +=
    "\n\n⚠ 注意ワード検出\n" +
    suspiciousWords.join("、");

}
