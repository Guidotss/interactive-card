"use client";
import { CardContext } from "@/context";
import { FC, useContext } from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  cardName: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
}

interface Props { 
  submitController: React.Dispatch<React.SetStateAction<boolean>>
}

export const NewCardForm:FC<Props> = ({ submitController }) => {
  const {
    cardName,
    cardNumber,
    expMonth,
    expYear,
    cvv,
    setCardName,
    setCardNumber,
    setExpMonth,
    setExpYear,
    setCvv,
  } = useContext(CardContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    if(!errors.cardName && !errors.cardNumber && !errors.expMonth && !errors.expYear && !errors.cvv) { 
      submitController(true)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-72 sm:mt-0 mr-4">
      <form
        className="w-3/4 flex flex-col items-center justify-center"  
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <p className="ml-2 font-semibold text-deep_violet">CARDHOLDER NAME</p>
          <input
            className="border border-gray-300 rounded-md p-2 px-4 m-2 sm:w-[410px] w-[290px] font-semibold text-deep_violet"
            placeholder="e.g Jane Appleseed"
            value={cardName}
            {...register("cardName", { required: true })}
            onChange={(e) => setCardName(e.target.value)}
          />
          {errors.cardName && (
            <span className="text-red-500 ml-2 font-semibold">
              This field is required!
            </span>
          )}
        </div>

        <div className="mt-3 mb-3 flex flex-col">
          <p className="ml-2 font-semibold text-deep_violet">CARD NUMBER</p>
          <input
            className="border border-gray-300 rounded-md px-4 p-2 m-2 sm:w-[410px] w-[290px] font-semibold text-deep_violet"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            {...register("cardNumber", { required: true })}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && (
            <span className="text-red-500 ml-2 font-semibold">
              This field is required!
            </span>
          )}
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <p className="ml-2 font-semibold text-deep_violet">
              EXP. DATE (MM/YY)
            </p>
            <div className="flex">
              <input
                className="border border-gray-300 rounded-md p-2 px-4 m-2 sm:w-[90px] w-[80px] font-semibold text-deep_violet"
                placeholder="MM"
                value={expMonth}
                {...register("expMonth", { required: true })}
                onChange={(e) => setExpMonth(e.target.value)}
              />

              <input
                className="border border-gray-300 rounded-md p-2 px-4 m-2 sm:w-[90px] w-[80px] font-semibold text-deep_violet"
                placeholder="YY"
                value={expYear}
                {...register("expYear", { required: true })}
                onChange={(e) => setExpYear(e.target.value)}
              />
            </div>
            {(errors.expMonth || errors.expYear) && (
              <span className="text-red-500 ml-2 font-semibold mb-1">
                Cannot be blank!
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <p className="ml-2 font-semibold text-deep_violet">CVV</p>
            <input
              className="border border-gray-300 rounded-md p-2 px-4 m-2 sm:w-[200px] w-[110px] font-semibold text-deep_violet"
              placeholder="e.g. 123"
              value={cvv}
              {...register("cvv", {
                required: true,
                minLength: 3,
                maxLength: 3,
              })}
              onChange={(e) => setCvv(e.target.value)}
            />
            {errors.cvv && (
              <span className="text-red-500 ml-2 font-semibold text-md">
                This field is required!
              </span>
            )}
          </div>
        </div>
        <button className="bg-deep_violet sm:w-[410px] w-[300px] p-2 py-3 rounded-lg hover:opacity-[0.9] transition-all">
          <span className="text-slate-50 tracking-wider font-semibold">
            Confirm
          </span>
        </button>
      </form>
    </div>
  );
};
