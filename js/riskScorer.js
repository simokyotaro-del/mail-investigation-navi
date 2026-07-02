function calculateRiskScore(data){

  let score = 0;

  // 危険ワード
  score += data.dangerWords.length * 5;

  // URL
  score += data.urls.length * 5;

  // URL危険判定
  score += data.urlRisks.length * 10;

  if(score > 100){
    score = 100;
  }

  return score;

}
