"use client";

import { CardContext } from "@/context";
import { useNewUser } from "@/hooks";
import { useContext } from "react";

export const NewCardForm = () => {
  const {
    cardName,
    cardNumber,
    expDate,
    cvv,
    setCardName,
    setCardNumber,
    setExpDate,
  } = useContext(CardContext);

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-3/4 flex flex-col items-center justify-center">
        <div>
          <p className="ml-2 font-semibold text-deep_violet">CARDHOLDER NAME</p>
          <input
            className="border border-gray-300 rounded-md p-2 px-4 m-2 w-[410px]"
            placeholder="e.g Jane Appleseed"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>

        <div className="mt-3 mb-3">
          <p className="ml-2 font-semibold text-deep_violet">CARD NUMBER</p>
          <input
            className="border border-gray-300 rounded-md px-4 p-2 m-2 w-[410px]"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex">
          <div>
            <p className="ml-2 font-semibold text-deep_violet">
              EXP. DATE (MM/YY)
            </p>
            <input
              className="border border-gray-300 rounded-md p-2 px-4 m-2 w-[90px]"
              placeholder="MM"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
            <input
              className="border border-gray-300 rounded-md p-2 px-4 m-2 w-[90px]"
              placeholder="YY"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
          </div>
          <div>
            <p className="ml-2 font-semibold text-deep_violet">CVV</p>
            <input
              className="border border-gray-300 rounded-md p-2 px-4 m-2 w-[200px]"
              placeholder="e.g. 123"
              value={cvv}
              onChange={(e) => setExpDate(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-deep_violet w-[410px] p-2 py-3 rounded-lg hover:opacity-[0.9] transition-all">
          <span className="text-slate-50 tracking-wider font-semibold">
            Confirm
          </span>
        </button>
      </form>
    </div>
  );
};
