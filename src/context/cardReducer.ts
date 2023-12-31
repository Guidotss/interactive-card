import { CardState } from ".";

type CardActionType =
  | { type: "[Card] - SET_NAME"; payload: string }
  | { type: "[Card] - SET_CARD_NUMBER"; payload: string }
  | { type: "[Card] - SET_EXP_DATE"; payload: string }
  | { type: "[Card] - SET_CVV"; payload: string }
  | { type: "[Card] - SET_EXP_MONTH"; payload: string }
  | { type: "[Card] - SET_EXP_YEAR"; payload: string };

export const cardReducer = (
  state: CardState,
  action: CardActionType
): CardState => {
  switch (action.type) {
    case "[Card] - SET_NAME":
      return {
        ...state,
        cardName: action.payload,
      };

    case "[Card] - SET_CARD_NUMBER":
      return {
        ...state,
        cardNumber: action.payload,
      };

    case "[Card] - SET_CVV":
      return {
        ...state,
        cvv: action.payload,
      };
    
    case "[Card] - SET_EXP_MONTH":
      return {
        ...state,
        expMonth: action.payload,
      };
    
    case "[Card] - SET_EXP_YEAR": 
      return {
        ...state,
        expYear: action.payload,
      };
    default:
      return state;
  }
};
