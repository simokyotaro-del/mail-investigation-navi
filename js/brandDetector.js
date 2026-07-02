function detectBrands(text){

  const brands = [

    "Amazon",
    "楽天",
    "PayPay",
    "Apple",
    "Google",
    "Microsoft",
    "三井住友",
    "イオンカード",
    "JCB",
    "Visa"

  ];

  let result = [];

  brands.forEach(brand=>{

    if(
      text.toLowerCase().includes(
        brand.toLowerCase()
      )
    ){

      result.push(brand);

    }

  });

  return result;

}
