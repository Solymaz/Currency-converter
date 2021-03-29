import React from "react";
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
