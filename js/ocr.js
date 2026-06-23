async function extractTextFromImage(file){

  const result = await Tesseract.recognize(
    file,
    "jpn+eng"
  );

  return result.data.text;
}
