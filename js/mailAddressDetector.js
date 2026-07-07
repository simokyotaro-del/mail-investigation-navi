function detectMailAddresses(text){

  const regex =
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

  const matches = text.match(regex);

  if(!matches){

    return [];

  }

  return [...new Set(matches)];

}


function extractDomains(mailAddresses){

  let domains = [];

  mailAddresses.forEach(address=>{

    const domain =
      address.split("@")[1];

    if(domain){

      domains.push(domain.toLowerCase());

    }

  });

  return [...new Set(domains)];

}
