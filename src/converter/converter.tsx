import React, { useEffect, useState } from "react";
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

type TCurrenciesCodeRate = {
  [key: string]: number;
};

type TCountriesDetails = {
  code: string;
  name: string;
  symbol: string;
};

type TCurrenciesDetails = {
  code: string;
  name: string;
  rate: number;
};

export default function CurrencyConverter() {
  const [
    currenciesCodeRate,
    setCurrenciesCodeRate,
  ] = useState<TCurrenciesCodeRate>({});
  const [countriesDetails, setCountriesDetails] = useState<TCountriesDetails[]>(
    []
  );
  const [currenciesDetails, setCurrenciesDetails] = useState<
    TCurrenciesDetails[]
  >([]);

  //fetch the currency data on load and save it from the results
  useEffect(() => {
    const currenciesApiUrl = `http://data.fixer.io/api/latest?access_key=0e99bcf06781539a85115ed4a10a18fe&format=1`;
    const countriesApiUrl = `https://restcountries.eu/rest/v2/all`;
    axios.get(currenciesApiUrl).then((result) => {
      setCurrenciesCodeRate(result.data.rates);
    });
    axios.get(countriesApiUrl).then((result) => {
      const currencies = result.data
        .map((country) => country.currencies)
        .flat();
      setCountriesDetails(currencies);
    });
  }, []);

  //combine the currency code with currency name and the rate
  useEffect(() => {
    if (currenciesCodeRate && countriesDetails) {
      setCurrenciesDetails(
        Object.entries(currenciesCodeRate).map(([code, rate]) => {
          const currency = countriesDetails.find(
            (country) => country.code === code
          );
          return {
            code: code,
            name: (currency && currency.name) || code,
            rate: rate,
          };
        })
      );
    }
  }, [currenciesCodeRate, countriesDetails]);

  return (
    <Converter>
      <CurrencyDetails>
        <CurrencyHeader>Currency I Have:</CurrencyHeader>
        <Currencies>
          {currenciesDetails.map((currencyDetail) => (
            <Currency key={currencyDetail.code}>{currencyDetail.name}</Currency>
          ))}
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
