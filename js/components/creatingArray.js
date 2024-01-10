export function generateRandomArray(
  totalLength,
  numDigits,
  repetitions,
  useNumDigits = true
) {
  if (totalLength % repetitions !== 0) {
    console.error(
      "Количество элементов массива должно быть кратным количеству повторений."
    );
    return [];
  }
  let array = [];
  const uniqueNumbers = totalLength / repetitions;
  for (let i = 0; i < uniqueNumbers; i++) {
    let randomNumber;
    if (useNumDigits) {
      randomNumber = Math.floor(Math.random() * Math.pow(10, numDigits)) + 1;
    } else {
      randomNumber = Math.floor(Math.random() * 1000) + 1; // Пример генерации чисел без учета количества знаков (можно изменить по желанию)
    }
    for (let j = 0; j < repetitions; j++) {
      array.push(randomNumber);
    }
  }
  return array;
}

export const arrTests = [
  { totalLength: 50, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 50, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 50, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 900, numDigits: 1, repetitions: 3, useNumDigits: false },
];
