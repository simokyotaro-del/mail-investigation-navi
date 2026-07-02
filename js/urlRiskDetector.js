function detectUrlRisks(urls){

  let risks = [];

  urls.forEach(url=>{

    const lower = url.toLowerCase();

    // 短縮URL
    if(
      lower.includes("bit.ly") ||
      lower.includes("tinyurl.com") ||
      lower.includes("t.co")
    ){

      risks.push({
        url:url,
        level:"中",
        reason:"短縮URL"
      });

    }

    // IPアドレスURL
    if(
      /^https?:\/\/\d+\.\d+\.\d+\.\d+/.test(lower)
    ){

      risks.push({
        url:url,
        level:"高",
        reason:"IPアドレスURL"
      });

    }

    // http通信
    if(
      lower.startsWith("http://")
    ){

      risks.push({
        url:url,
        level:"低",
        reason:"暗号化されていない通信"
      });

    }

  });

  return risks;

}
