import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency, fetchLatestSymbols } from './operations';

const initialState = {
  baseCurrency: '',
  isLoading: false,
  error: null,
  exchangeInfo: null,
  rates:[],
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
  
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
  .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
    
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
.addCase(fetchLatestSymbols.pending, (state) => {
  state.isLoading =true;
  state.error = null;
})
.addCase(fetchLatestSymbols.fulfilled, (state, {payload})=>{
  state.isLoading = false;
  state.rates = payload;
})
.addCase(fetchLatestSymbols.rejected, (state, {payload}) => {
  state.error = payload;
  state.rates = [];
  state.isLoading = false;
})

});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
