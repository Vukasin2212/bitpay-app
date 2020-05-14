import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cryptoCurrency: null,
  promo: null
};

const setPromo = (state, action) => {
  return {
    ...state,
    promo: action.promo
  };
};

const setCC = (state, action) => {
  return {
    ...state,
    cryptoCurrency: action.cryptoCurrency
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CRYPTO_CURRENCY:
      return setCC(state, action);

    case actionTypes.SET_PROMO:
      return setPromo(state, action);

    default:
      return state;
  }
};
export default reducer;
