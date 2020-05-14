import * as actionTypes from "./actionTypes";

export const setPromo = promo => {
  return {
    type: actionTypes.SET_PROMO,
    promo: promo
  };
};
export const setCC = cryptoCurrency => {
  return {
    type: actionTypes.SET_CRYPTO_CURRENCY,
    cryptoCurrency: cryptoCurrency
  };
};
