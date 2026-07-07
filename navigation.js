let selectedImage = null;

function showScreen(id){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

}

async function nextFlow(){

  if(!selectedImage){

    alert("画像を選択してください");
    return;

  }

  showScreen("screen2");

  // OCR
  const text = await extractTextFromImage(selectedImage);

  document.getElementById("headerInput").value = text;

  // メールアプリ判定
  const mailApp = detectMailApp(text);
  const guide = createMailGuide(mailApp);

  // 危険ワード検出
  const suspiciousWords = detectDangerWords(text);

  // URL検出
  const urls = detectUrls(text);

  // URL危険判定
  const urlRisks = detectUrlRisks(urls);

  // ブランド検出
const brands = detectBrands(text);

const mailAddresses =
  detectMailAddresses(text);

const domains =
  extractDomains(mailAddresses);

const brandRisks =
  detectBrandRisks(
    brands,
    urls,
    domains
  );

  // 危険度計算
  const riskScore = calculateRiskScore({

    dangerWords: suspiciousWords,

    urls: urls,

    urlRisks: urlRisks

  });

  console.log("危険度:", riskScore);

  // 画面表示
  let resultText = guide;

  if(suspiciousWords.length > 0){

    resultText +=
      "\n\n⚠ 注意ワード検出\n" +
      suspiciousWords.join("、");

  }

  if(urls.length > 0){

    resultText +=
      "\n\n🔗 URL検出\n" +
      urls.join("\n");

  }

  if(urlRisks.length > 0){

    resultText +=
      "\n\n🚨 URL危険判定";

    urlRisks.forEach(risk=>{

      resultText +=
        `\n${risk.url}（${risk.level}：${risk.reason}）`;

    });

  }
  if(brands.length > 0){

  resultText +=
    "\n\n🏢 ブランド検出\n";

  resultText +=
    brands.join("、");

}

  if(brandRisks.length > 0){

  resultText +=
    "\n\n🚨 ブランド偽装の可能性\n";

  brandRisks.forEach(risk=>{

    resultText +=
      `\n${risk.brand} → ${risk.url}`;

  });

}

  resultText +=
    `\n\n📊 現在の危険度スコア：${riskScore}`;

  document.getElementById("appResult").innerText = resultText;

  setTimeout(()=>{

    showScreen("screen3");

  },1500);

}

document
.getElementById("imageInput")
.addEventListener("change",function(){

  const file = this.files[0];

  if(!file) return;

  selectedImage = file;

  const reader = new FileReader();

  reader.onload = function(e){

    const preview = document.getElementById("preview");

    preview.src = e.target.result;

    preview.style.display = "block";

  };

  reader.readAsDataURL(file);

});
