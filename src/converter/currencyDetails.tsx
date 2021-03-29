import React, { useState } from "react";
import { TCurrenciesDetails } from "./converter";
import {
  AmountHeader,
  CurrencyHeader,
  Container,
  Currencies,
  Currency,
  Amount,
} from "./styled";

interface Props {
  currenciesDetails: TCurrenciesDetails[];
  header: string;
}

export default function CurrencyDetails({ currenciesDetails, header }: Props) {
  const [currencyCode, setCurrencyCode] = useState();
  return (
    <Container>
      <CurrencyHeader>{header}</CurrencyHeader>
      <Currencies onChange={(event) => setCurrencyCode(event.target.value)}>
        <Currency default value="">
          Select ...
        </Currency>
        {currenciesDetails.map((currencyDetail) => (
          <Currency key={currencyDetail.code} value={currencyDetail.code}>
            {currencyDetail.name}
          </Currency>
        ))}
      </Currencies>
      <AmountHeader>Amount:</AmountHeader>
      <Amount></Amount>
      <span>{currencyCode}</span>
    </Container>
  );
}
