import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyDetails from "./currencyDetails";
import { Converter } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

type TCurrenciesCodeRate = {
  [key: string]: number;
};

type TCountriesDetails = {
  code: string;
  name: string;
  symbol: string;
};

export type TCurrenciesDetails = {
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

  const [
    currencyDetailFrom,
    setCurrencyDetailFrom,
  ] = useState<TCurrenciesDetails>();

  const [
    currencyDetailTo,
    setCurrencyDetailTo,
  ] = useState<TCurrenciesDetails>();

  const [amount, setAmount] = useState<number>();

  const [result, setResult] = useState<number>();

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
    if (currenciesCodeRate && countriesDetails.length > 0) {
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

  // convert currency and show 2 decimals
  useEffect(() => {
    if (amount && currencyDetailFrom && currencyDetailTo) {
      const result =
        Math.round(
          (amount / currencyDetailFrom.rate) * currencyDetailTo.rate * 100
        ) / 100;
      setResult(result);
    }
  }, [amount, currencyDetailFrom, currencyDetailTo]);

  return (
    <Converter>
      {currenciesDetails.length > 0 ? (
        <>
          <CurrencyDetails
            currenciesDetails={currenciesDetails}
            header={"Currency I Have:"}
            setCurrencyDetail={setCurrencyDetailFrom}
            amount={amount}
            setAmount={setAmount}
          />
          <CurrencyDetails
            currenciesDetails={currenciesDetails}
            header={"Currency I Want:"}
            disabledInput
            setCurrencyDetail={setCurrencyDetailTo}
            amount={result}
          />
        </>
      ) : (
        <FontAwesomeIcon spin size="3x" icon={faSpinner} />
      )}
    </Converter>
  );
}
