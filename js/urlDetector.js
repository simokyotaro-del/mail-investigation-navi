function detectUrls(text){

  const urlRegex =
    /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;

  const urls = text.match(urlRegex);

  if(!urls){
    return [];
  }

  return urls;

}
