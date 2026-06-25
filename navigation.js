let selectedImage = null;

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>{
    s.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

async function nextFlow(){

  if(!selectedImage){
    alert("画像を選択してください");
    return;
  }

  showScreen("screen2");

  const text =
    await extractTextFromImage(selectedImage);

  document.getElementById("headerInput").value = text;

  const lowerText = text.toLowerCase();

  let mailApp = "不明";

if (
  lowerText.includes("gmail") ||
  lowerText.includes("google")
){
  mailApp = "Gmail";
}
else if (
  lowerText.includes("outlook") ||
  lowerText.includes("microsoft")
){
  mailApp = "Outlook";
}
else if (
  lowerText.includes("yahoo")
){
  mailApp = "Yahooメール";
}
else if (
  lowerText.includes("icloud") ||
  lowerText.includes("apple")
){
  mailApp = "Apple Mail";
}

let guide = "";

if(mailApp === "Gmail"){

  guide =
`Gmail と推定しました

取得方法
1. メールを開く
2. ︙を押す
3. メッセージのソースを表示
4. 全文コピー`;

}
else if(mailApp === "Outlook"){

  guide =
`Outlook と推定しました

取得方法
1. メールを開く
2. その他操作
3. メッセージソース表示`;

}
else{

  guide =
`メールアプリを特定できませんでした

ヘッダー取得方法を確認してください`;

}

document.getElementById("appResult").innerText =
  guide;

  const looksLikeHeader =
    lowerText.includes("authentication-results") ||
    lowerText.includes("received:") ||
    lowerText.includes("return-path:") ||
    lowerText.includes("message-id:");

  setTimeout(()=>{

  showScreen("screen3");

},1500);

} 

document
.getElementById("imageInput")
.addEventListener("change", function(){

  const file = this.files[0];

  if(!file) return;

  selectedImage = file;

  const reader = new FileReader();

  reader.onload = function(e){

    const preview =
      document.getElementById("preview");

    preview.src = e.target.result;
    preview.style.display = "block";

  };

  reader.readAsDataURL(file);

});
