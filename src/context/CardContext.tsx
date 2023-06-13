import { createContext } from 'react';

interface CardContextProps {
    cardNumber: string;
    cardName: string;
    expDate: string;
    cvv: string;

    setCardNumber: (cardNumber: string) => void;
    setCardName: (cardName: string) => void;
    setExpDate: (expDate: string) => void;
    setCvv: (cvv: string) => void;
}


export const CardContext = createContext<CardContextProps>({} as CardContextProps); 