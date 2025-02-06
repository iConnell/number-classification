export const isPrime = (num: number): boolean => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const isPerfect = (num: number): boolean => {
  if (num < 6) return false; // Perfect numbers start from 6

  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

export const digitSum = (num: number): number => {
  return Math.abs(num)
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

export const isArmstrong = (num: number): boolean => {
  const digits = Math.abs(num).toString().split("");
  const n = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), n),
    0
  );

  return sum === Math.abs(num);
};

export const isOdd = (num: number) => {
  return num % 2 !== 0;
};

export const isEven = (num: number) => {
  return num % 2 === 0;
};

export const getProperties = (num: number) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  if (isOdd(num)) properties.push("odd");
  if (isEven(num)) properties.push("even");
  return properties;
};
