

export function serializeArray(array) {
  // Преобразование массива в строку и сжатие данных
  const compressedString = LZString.compressToBase64(JSON.stringify(array));
  return compressedString;
}

export function deserializeString(serializedString) {
  // Распаковка и преобразование строки в массив
  const decompressedString = LZString.decompressFromBase64(serializedString);
  const array = JSON.parse(decompressedString);
  return array;
}
