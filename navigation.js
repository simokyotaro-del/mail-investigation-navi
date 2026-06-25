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

document.getElementById("appResult").innerText =
  mailApp + " と推定しました";

  const looksLikeHeader =
    lowerText.includes("authentication-results") ||
    lowerText.includes("received:") ||
    lowerText.includes("return-path:") ||
    lowerText.includes("message-id:");

  setTimeout(()=>{

    if(looksLikeHeader){

      analyzeHeader();

    }else{

      showScreen("screen4");

    }

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
