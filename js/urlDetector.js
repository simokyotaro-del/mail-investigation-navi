function detectUrls(text){

  let results = [];

  // https:// や http://
  const urlRegex =
    /https?:\/\/[^\s]+/gi;

  // www.
  const wwwRegex =
    /www\.[^\s]+/gi;

  // ドメインだけ
  const domainRegex =
    /\b[a-zA-Z0-9.-]+\.(com|net|org|jp|co\.jp|ne\.jp|xyz|info|biz|cc|io)\b/gi;

  const urlMatches = text.match(urlRegex) || [];
  const wwwMatches = text.match(wwwRegex) || [];
  const domainMatches = text.match(domainRegex) || [];

  results = [
    ...urlMatches,
    ...wwwMatches,
    ...domainMatches
  ];

  // 重複削除
  return [...new Set(results)];

}
