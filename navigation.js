let selectedImage = null;

/* 画面切替 */
function showScreen(id){

  document.querySelectorAll(".screen").forEach(screen=>{
    screen.classList.remove("active");
  });

  document.getElementById(id)
    .classList.add("active");
}

/* 画像選択 */
document
.getElementById("imageInput")
.addEventListener("change", function(){

  selectedImage = this.files[0];

  if(!selectedImage) return;

  const reader = new FileReader();

  reader.onload = function(e){

    const preview =
      document.getElementById("preview");

    preview.src = e.target.result;
    preview.style.display = "block";
  };

  reader.readAsDataURL(selectedImage);

});

/* 解析開始 */
async function nextFlow(){

  if(!selectedImage){

    alert("画像を選択してください");

    return;
  }

  showScreen("screen2");

  try{

    const text =
      await extractTextFromImage(selectedImage);

    console.log(text);

    setTimeout(()=>{

      showScreen("screen3");

    },1500);

  }catch(error){

    console.error(error);

    alert("OCR解析に失敗しました");

    showScreen("screen1");
  }

}
