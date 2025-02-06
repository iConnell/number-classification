import { Request, Response } from "express";
import { isPrime, isPerfect, digitSum, getProperties } from "./utils";
import axios from "axios";

interface IQueryParams {
  number: number;
}

export const classifyNumber = async (req: Request, res: Response) => {
  try {
    const { number } = req.query as unknown as IQueryParams;

    if (!number || isNaN(Number(number))) {
      res.status(400).json({ number: "alphabet", error: true });
      return;
    }

    const url = `http://numbersapi.com/${number}`;
    const funFact = await axios.get(url);

    const response = {
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfect(number),
      properties: getProperties(Number(number)),
      digit_sum: digitSum(Number(number)),
      fun_fact: funFact.data,
    };

    res.status(200).json(response);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};
