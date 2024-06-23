export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectLoading = state => state.currency.isLoading;
export const selectError = state => state.currency.error;
export const selectExchangeInfo = state => state.currency.exchangeInfo;