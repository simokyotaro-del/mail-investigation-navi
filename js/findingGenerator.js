function generateFindings(data){

  const findings = [];

  // ブランド偽装
  data.brandRisks.forEach(risk=>{

    findings.push(
      `${risk.brand}を装った可能性があります`
    );

  });

  // URL危険判定
  data.urlRisks.forEach(risk=>{

    findings.push(
      `${risk.url} は ${risk.reason}`
    );

  });

  // 危険ワード
  if(data.dangerWords.length > 0){

   const messages = {

  "至急":"「至急」という緊急性を煽る表現があります。",

  "緊急":"緊急性を煽る表現があります。",

  "確認":"利用者に確認を急がせています。",

  "ログイン":"ログイン情報を入力させようとしている可能性があります。",

  "パスワード":"パスワード入力を求めています。",

  "アカウント":"アカウント情報に関する内容です。",

  "停止":"サービス停止を匂わせ、不安を煽っています。",

  "利用制限":"利用制限を理由に操作を促しています。"

};

data.dangerWords.forEach(word=>{

  if(messages[word]){

    findings.push(messages[word]);

  }

});

  return findings;

}
