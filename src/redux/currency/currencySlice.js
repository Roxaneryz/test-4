import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';

const initialState = {
  baseCurrency: '',
  isLoading: false,
  error: null,
  exchangeInfo: null,

};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      console.log(action);
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
  .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
    console.log("async", action);
      state.baseCurrency = action.payload;
    })
    .addCase(fetchExchangeCurrency.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchExchangeCurrency.fulfilled, (state, {payload}) =>{
      state.isLoading = false;
      state.exchangeInfo = payload;
    })
    .addCase(fetchExchangeCurrency.rejected, (state, {payload}) => {
      state.error = payload;
      state.exchangeInfo = null;
      state.isLoading = false;
    })
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
