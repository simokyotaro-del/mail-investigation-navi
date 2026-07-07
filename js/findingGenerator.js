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

    findings.push(
      `危険ワードを検出しました（${data.dangerWords.join("、")}）`
    );

  }

  return findings;

}
