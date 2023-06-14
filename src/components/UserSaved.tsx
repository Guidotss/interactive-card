"use client";
import { FC } from "react";
import { CheckIcon } from "./icons";

interface UserSavedProps {
  continueController: React.Dispatch<React.SetStateAction<boolean>>;
}
export const UserSaved: FC<UserSavedProps> = ({ continueController }) => {
  const handleContinue = () => {
    continueController(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-5">
        <CheckIcon />
      </div>
      <h1 className="text-deep_violet text-4xl font-semibold mb-3 tracking-widest">
        Thank you!
      </h1>
      <p className="text-gray-500 opacity-[0.8]">
        We’ve added your card detail s
      </p>
      <button
        className="bg-deep_violet px-5 py-3 rounded-md mt-5 w-[350px] text-slate-50 font-semibold"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};
