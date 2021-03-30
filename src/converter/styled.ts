import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Converter = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Currencies = styled.select`
  height: 30px;
  border-radius: 5px;
  width: 300px;
`;


export const Amount = styled.input`
  margin: 0;
  padding: 0px;
  width: 293px;
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
  @media only screen and (max-width: 700px) {
    margin-top: 20px;
    transform: rotate(90deg);
    :hover {
      transform: rotate(90deg);
    }
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
  top: 0;
`;

export const Label = styled.div`
  height: 28px;
  border-bottom: solid 2px;
  display: block;
  width: 300px;
  line-height: 28px;
`;
