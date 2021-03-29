import React, { useEffect } from "react";
import axios from "axios";
import {
  AmountHeader,
  CurrencyHeader,
  Converter,
  CurrencyDetails,
  Currencies,
  Currency,
  Amount,
} from "./styled";

export default function CurrencyConverter() {

  //fetch the currency data on load 
  useEffect(() => {
    const currenciesApiUrl = `http://data.fixer.io/api/latest?access_key=0e99bcf06781539a85115ed4a10a18fe&format=1`;
    axios.get(currenciesApiUrl);
  }, []);

  return (
    <Converter>
      <CurrencyDetails>
        <CurrencyHeader>Currency I Have:</CurrencyHeader>
        <Currencies>
          <Currency></Currency>
        </Currencies>
        <AmountHeader>Amount:</AmountHeader>
        <Amount></Amount>
      </CurrencyDetails>
      <CurrencyDetails>
        <CurrencyHeader>Currency I Want:</CurrencyHeader>
        <Currencies>
          <Currency></Currency>
        </Currencies>
        <AmountHeader>Amount:</AmountHeader>
        <Amount></Amount>
      </CurrencyDetails>
    </Converter>
  );
}
