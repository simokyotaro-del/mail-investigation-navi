function detectMailApp(text){

  const lowerText = text.toLowerCase();

  if(
    lowerText.includes("gmail") ||
    lowerText.includes("google")
  ){
    return "Gmail";
  }

  if(
    lowerText.includes("outlook") ||
    lowerText.includes("microsoft")
  ){
    return "Outlook";
  }

  if(
    lowerText.includes("yahoo")
  ){
    return "Yahooメール";
  }

  if(
    lowerText.includes("icloud") ||
    lowerText.includes("apple")
  ){
    return "Apple Mail";
  }

  return "不明";

}


function createMailGuide(mailApp){

  if(mailApp === "Gmail"){

    return `Gmail と推定しました

取得方法
1. メールを開く
2. ︙を押す
3. メッセージのソースを表示
4. 全文コピー`;

  }

  if(mailApp === "Outlook"){

    return `Outlook と推定しました

取得方法
1. メールを開く
2. その他操作
3. メッセージソース表示`;

  }

  if(mailApp === "Yahooメール"){

    return `Yahooメール と推定しました

ヘッダー取得方法を確認してください`;

  }

  if(mailApp === "Apple Mail"){

    return `Apple Mail と推定しました

ヘッダー取得方法を確認してください`;

  }

  return `メールアプリを特定できませんでした

ヘッダー取得方法を確認してください`;

}
