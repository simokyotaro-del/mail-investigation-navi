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
