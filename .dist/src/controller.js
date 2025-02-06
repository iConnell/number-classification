"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.classifyNumber = void 0;
const utils_1 = require("./utils");
const axios_1 = __importDefault(require("axios"));
const classifyNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { number } = req.query;
        if (!number || isNaN(Number(number))) {
            res.status(400).json({ number: "alphabet", error: true });
            return;
        }
        const url = `http://numbersapi.com/${number}`;
        const funFact = yield axios_1.default.get(url);
        const response = {
            number,
            is_prime: (0, utils_1.isPrime)(number),
            is_perfect: (0, utils_1.isPerfect)(number),
            properties: (0, utils_1.getProperties)(Number(number)),
            digit_sum: (0, utils_1.digitSum)(Number(number)),
            fun_fact: funFact.data,
        };
        res.status(200).json(response);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: "An unknown error occurred" });
        }
    }
});
exports.classifyNumber = classifyNumber;
