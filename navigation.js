function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

function nextFlow(){

  const file =
    document.getElementById("imageInput").files[0];

  if(!file){
    alert("スクリーンショットを選択してください");
    return;
  }

  showScreen("screen2");

  setTimeout(()=>{
    showScreen("screen3");
  },1500);
}
