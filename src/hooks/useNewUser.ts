"use client"
import { useState } from "react";

export const useNewUser = () => {
  const [Name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expDate, setExpDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpDate(e.target.value);
  };

  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
  };

  return {
    Name,
    cardNumber,
    expDate,
    cvv,
    handleName,
    handleCardNumber,
    handleExpDate,
    handleCvv,
  };
};
