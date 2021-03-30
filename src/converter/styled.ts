import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Converter = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Container = styled.div``;

export const CurrencyHeader = styled.h2``;

export const Currencies = styled.select`
  height: 30px;
  border-radius: 5px;
  width: 300px;
`;

export const Currency = styled.option``;

export const AmountHeader = styled.h3``;

export const Amount = styled.input`
  margin: 0;
  padding: 0px;
  width: 300px;
  height: 28px;
  border-radius: 5px;
  border: solid 1px;
  font-size: 16px;
  padding-left: 5px;

  /* Remove arrow buttons in Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /*Remove arrow buttons in Firefox */
  -moz-appearance: textfield;
`;

export const Arrow = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #485cc7;
  margin-top: 70px;
  :hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const CurrencyCode = styled.span`
  position: absolute;
  right: 5px;
  line-height: 30px;
  font-weight: bold;
`;
