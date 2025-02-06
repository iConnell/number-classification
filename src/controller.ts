import { Request, Response } from "express";
import { isPrime, isPerfect, digitSum, getProperties } from "./utils";
import axios from "axios";

interface IQueryParams {
  number: number;
}

export const classifyNumber = async (req: Request, res: Response) => {
  try {
    const { number } = req.query as unknown as IQueryParams;

    if (!number) {
      res.status(400).json({ number: null, error: true });
      return;
    }

    if (isNaN(Number(number))) {
      res.status(400).json({ number: "alphabet", error: true });
      return;
    }

    const numbersAPIURL = process.env.NUMBERS_API_URL || "";

    const url = `${numbersAPIURL}/${number}`;
    const funFact = await axios.get(url);

    const num = Number(number);

    const response = {
      number,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties: getProperties(num),
      digit_sum: digitSum(num),
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
