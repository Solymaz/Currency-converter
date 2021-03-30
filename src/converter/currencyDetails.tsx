import React, { useEffect, useState } from "react";
import { TCurrenciesDetails } from "./converter";
import { Currencies, Amount, Wrapper, CurrencyCode, Label } from "./styled";

interface Props {
  currenciesDetails: TCurrenciesDetails[];
  header: string;
  showLabel?: boolean;
  setCurrencyDetail: (value?: TCurrenciesDetails) => void;
  selectedCurrencyDetail?: TCurrenciesDetails;
  amount?: number;
  setAmount?: (value: number) => void;
}

export default function CurrencyDetails({
  currenciesDetails,
  header,
  showLabel,
  setCurrencyDetail,
  selectedCurrencyDetail,
  amount,
  setAmount,
}: Props) {
  const [currencyCode, setCurrencyCode] = useState<string>();

  useEffect(() => {
    if (currenciesDetails && currenciesDetails.length > 0) {
      setCurrencyCode(currenciesDetails[0].code);
      setCurrencyDetail(currenciesDetails[0]);
    }
  }, [currenciesDetails]);

  return (
    <div>
      <h2>{header}</h2>
      <Currencies
        value={selectedCurrencyDetail?.code}
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
          <option key={currencyDetail.code} value={currencyDetail.code}>
            {currencyDetail.name}
          </option>
        ))}
      </Currencies>
      <h3>Amount:</h3>
      <Wrapper>
        {showLabel ? (
          <Label>{amount ? amount : ""}</Label>
        ) : (
          <Amount
            onChange={(event) => {
              setAmount && setAmount(event.target.value);
            }}
            value={amount}
            type="number"
          ></Amount>
        )}
        <CurrencyCode>
          {selectedCurrencyDetail ? selectedCurrencyDetail.code : currencyCode}
        </CurrencyCode>
      </Wrapper>
    </div>
  );
}
