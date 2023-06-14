import { createContext } from 'react';

interface CardContextProps {
    cardNumber: string;
    cardName: string;
    expMonth: string;
    expYear: string;
    cvv: string;

    setCardNumber: (cardNumber: string) => void;
    setCardName: (cardName: string) => void;
    setExpMonth: (expMonth: string) => void;
    setExpYear: (expYear: string) => void;
    setCvv: (cvv: string) => void;
}


export const CardContext = createContext<CardContextProps>({} as CardContextProps); 