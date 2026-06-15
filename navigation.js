/* 画面切替 */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>{
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

/* フロー */
function nextFlow(){
  showScreen('screen2');

  setTimeout(()=>{
    showScreen('screen3');
  }, 1500);
}
