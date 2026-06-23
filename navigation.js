/* 画面切替 */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

/* フロー */
function nextFlow(){
  const file = document.getElementById("imageInput").files[0];

  if (!file){
    alert("画像を選択してください");
    return;
  }

  showScreen("screen2");

  setTimeout(()=>{
    showScreen("screen3");
  },1500);
}
