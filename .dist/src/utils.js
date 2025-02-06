"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProperties = exports.isEven = exports.isOdd = exports.isArmstrong = exports.digitSum = exports.isPerfect = exports.isPrime = void 0;
const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
exports.isPrime = isPrime;
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0)
            sum += i;
    }
    return sum === num;
};
exports.isPerfect = isPerfect;
const digitSum = (num) => {
    return Math.abs(num)
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
};
exports.digitSum = digitSum;
const isArmstrong = (num) => {
    const digits = num.toString().split("");
    const n = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), n), 0);
    return sum === num;
};
exports.isArmstrong = isArmstrong;
const isOdd = (num) => {
    return num % 2 !== 0;
};
exports.isOdd = isOdd;
const isEven = (num) => {
    return num % 2 === 0;
};
exports.isEven = isEven;
const getProperties = (num) => {
    const properties = [];
    if ((0, exports.isArmstrong)(num))
        properties.push("armstrong");
    if ((0, exports.isOdd)(num))
        properties.push("odd");
    if ((0, exports.isEven)(num))
        properties.push("even");
    return properties;
};
exports.getProperties = getProperties;
