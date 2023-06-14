import { useReducer, FC } from 'react';
import { CardContext, cardReducer } from '.';  



interface CardProviderProps {
    children: React.ReactNode;
}

export interface CardState {
    cardNumber: string;
    cardName: string;
    cvv: string;
    expMonth: string;
    expYear: string;
}


const CARD_INITIAL_STATE: CardState = {
    cardNumber: '',
    cardName: '',
    cvv: '',
    expMonth: '',
    expYear: '',
}


export const CardProvider: FC<CardProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(cardReducer, CARD_INITIAL_STATE); 

    const setCardNumber = (cardNumber: string) => {
        if(cardNumber.length > 17) return;
        if(isNaN(Number(cardNumber))) return;
        dispatch({ type: '[Card] - SET_CARD_NUMBER', payload: cardNumber });
    }

    const setCardName = (cardName: string) => {
        if(cardName.length > 20) return;
        
        dispatch({ type: '[Card] - SET_NAME', payload: cardName });
    }


    const setCvv = (cvv: string) => {
        if(cvv.length > 3) return;
        if(isNaN(Number(cvv))) return;
        dispatch({ type: '[Card] - SET_CVV', payload: cvv });
    }

    const setExpMonth = ( expoMonth: string ) => {
        if(+expoMonth > 12) return;
        dispatch({ type: '[Card] - SET_EXP_MONTH', payload: expoMonth });
    }

    const setExpYear = ( expYear: string ) => {
        if(+expYear > 99) return;
        dispatch({ type: '[Card] - SET_EXP_YEAR', payload: expYear });
    }



    return (
        <CardContext.Provider value={{
            ...state,

            setCardNumber,
            setCardName,
            setCvv,
            setExpYear,
            setExpMonth,
        }}>
            { children }
        </CardContext.Provider>
    );  
}