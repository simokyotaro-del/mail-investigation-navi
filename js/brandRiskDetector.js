function detectBrandRisks(brands, urls, domains){

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

    const official = officialDomains[brand];

    if(!official) return;

    const targets = [...urls, ...domains];

    targets.forEach(target=>{

      const lower = target.toLowerCase();

      // ブランド名が含まれないものは無視
      if(
        !lower.includes(
          brand.toLowerCase()
        )
      ){
        return;
      }

      const isOfficial =
        official.some(domain=>
          lower.includes(domain)
        );

      if(!isOfficial){

        risks.push({

          brand:brand,

          target:target,

          reason:"公式ドメインではありません"

        });

      }

    });

  });

  return risks;

}
