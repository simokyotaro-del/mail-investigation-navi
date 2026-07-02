function detectBrandRisks(brands, urls){

  const officialDomains = {

    "Amazon":[
      "amazon.co.jp",
      "amazon.jp",
      "amazon.com"
    ],

    "楽天":[
      "rakuten.co.jp",
      "rakuten-card.co.jp"
    ],

    "PayPay":[
      "paypay.ne.jp",
      "paypay-card.co.jp"
    ],

    "Apple":[
      "apple.com"
    ],

    "Google":[
      "google.com"
    ],

    "Microsoft":[
      "microsoft.com"
    ]

  };

  let risks = [];

  brands.forEach(brand=>{

    const domains = officialDomains[brand];

    if(!domains) return;

    urls.forEach(url=>{

      const lower = url.toLowerCase();

      const isOfficial = domains.some(domain=>
        lower.includes(domain)
      );

      if(!isOfficial){

        risks.push({
          brand:brand,
          url:url,
          reason:"公式ドメインではありません"
        });

      }

    });

  });

  return risks;

}
