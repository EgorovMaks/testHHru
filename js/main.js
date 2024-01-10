import { arrTests, generateRandomArray } from "./components/creatingArray.js";
import { deserializeString, serializeArray } from "./components/serialize.js";




function calculateCompressionRatio(originalLength, compressedLength) {
  return (
    (((originalLength - compressedLength) / originalLength) * 100).toFixed(2) +
    "%"
  );
}

arrTests.forEach((e) => {
  let myArray = generateRandomArray(
    e.totalLength,
    e.numDigits,
    e.repetitions,
    e.useNumDigits
  );
  console.log(
    "==========================================================================================",
    e
  );
  
  console.log("Исходный массив:", myArray);

  let serializedString = serializeArray(myArray);
  console.log("Сериализованная строка:", serializedString);

  let deserializedArray = deserializeString(serializedString);
  console.log("Десериализованный массив:", deserializedArray);

  let compressionRatio = calculateCompressionRatio(
    myArray.length * 3,
    serializedString.length
  );

  console.log("%cКоэффициент сжатия: " + compressionRatio, "color: green;");

  console.log(
    "=========================================================================================="
  );
});
