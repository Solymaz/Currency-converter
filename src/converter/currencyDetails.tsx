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
  disabledInput?: boolean;
  setCurrencyDetail: (value?: TCurrenciesDetails) => void;
  amount?: number;
  setAmount?: (value: number) => void;
}

export default function CurrencyDetails({
  currenciesDetails,
  header,
  disabledInput,
  setCurrencyDetail,
  amount,
  setAmount,
}: Props) {
  const [currencyCode, setCurrencyCode] = useState<string>();

  return (
    <Container>
      <CurrencyHeader>{header}</CurrencyHeader>
      <Currencies
        onChange={(event) => {
          setCurrencyCode(event.target.value);
          setCurrencyDetail(
            currenciesDetails.find(
              (currencyDetail) => currencyDetail.code === event.target.value
            )
          );
        }}
      >
        {currenciesDetails.map((currencyDetail) => (
          <Currency key={currencyDetail.code} value={currencyDetail.code}>
            {currencyDetail.name}
          </Currency>
        ))}
      </Currencies>
      <AmountHeader>Amount:</AmountHeader>
      <Amount
        onChange={(event) => setAmount && setAmount(event.target.value)}
        disabled={disabledInput}
        value={amount}
      ></Amount>
      <span>{currencyCode}</span>
    </Container>
  );
}
