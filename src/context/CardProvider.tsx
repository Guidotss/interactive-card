import { useReducer, FC } from 'react';
import { CardContext, cardReducer } from '.';  



interface CardProviderProps {
    children: React.ReactNode;
}

export interface CardState {
    cardNumber: string;
    cardName: string;
    cvv: string;
    expDate: string;
}


const CARD_INITIAL_STATE: CardState = {
    cardNumber: '',
    cardName: '',
    cvv: '',
    expDate: '',
}


export const CardProvider: FC<CardProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(cardReducer, CARD_INITIAL_STATE); 

    const setCardNumber = (cardNumber: string) => {
        if(cardNumber.length > 16) return;
        if(isNaN(Number(cardNumber))) return;
        dispatch({ type: '[Card] - SET_CARD_NUMBER', payload: cardNumber });
    }

    const setCardName = (cardName: string) => {
        dispatch({ type: '[Card] - SET_NAME', payload: cardName });
    }

    const setExpDate = (expDate: string) => {
        dispatch({ type: '[Card] - SET_EXP_DATE', payload: expDate });
    }

    const setCvv = (cvv: string) => {
        dispatch({ type: '[Card] - SET_CVV', payload: cvv });
    }



    return (
        <CardContext.Provider value={{
            ...state,

            setCardNumber,
            setCardName,
            setExpDate,
            setCvv,
        }}>
            { children }
        </CardContext.Provider>
    );  
}