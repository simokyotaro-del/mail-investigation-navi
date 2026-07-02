function detectDangerWords(text){

  const dangerKeywords = [
    "緊急",
    "至急",
    "アカウント停止",
    "利用制限",
    "本人確認",
    "パスワード",
    "ログイン",
    "24時間以内",
    "異常検知",
    "セキュリティ"
  ];

  let result = [];

  dangerKeywords.forEach(word=>{

    if(text.includes(word)){
      result.push(word);
    }

  });

  return result;

}
