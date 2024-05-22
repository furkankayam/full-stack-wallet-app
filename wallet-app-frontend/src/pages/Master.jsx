import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import bacroundImage from "../assets/Master.jpg";
import { Link } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import PercentIcon from "@mui/icons-material/Percent";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  background-image: url(${bacroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HalfContainer = styled.div`
  position: fixed;
  left: 4%;
  top: 9%;
  width: 47%;
  height: 87%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
`;

const Area1 = styled.div`
  position: absolute;
  top: 10%;
  left: 12%;
  width: 30%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  font-weight: bold;
`;
const Area2 = styled.div`
  position: absolute;
  top: 22%;
  left: 7%;
  width: 40%;
  height: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  font-weight: bold;
`;
const Area3 = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  justify-content: space-between;
  display: block;
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
`;
const Area4 = styled.div`
  position: absolute;
  bottom: 5%;
  left: 3%;
  width: 51%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  justify-content: space-between;
  display: block;
  display: flex;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
`;

const Home1 = styled.button`
  position: absolute;
  top: 37%;
  left: 3%;
  width: 6vw;
  height: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(18, 230, 7, 0.618);
  box-shadow: 0 8px 32px 0 rgba(7, 183, 33, 0.464);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;

const Home2 = styled.button`
  position: absolute;
  top: 37%;
  left: 21%;
  width: 6vw;
  height: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(208, 230, 7, 0.701);
  box-shadow: 0 8px 32px 0 rgba(171, 183, 7, 0.667);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;
const Home3 = styled.button`
  position: absolute;
  top: 37%;
  left: 40%;
  width: 6vw;
  height: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(230, 7, 7, 0.666);
  box-shadow: 0 8px 32px 0 rgba(183, 7, 7, 0.763);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;

const Home = styled.button`
  position: absolute;
  top: 2%;
  right: 3%;
  width: 6vw;
  height: 6vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(18, 230, 7, 0.618);
  box-shadow: 0 8px 32px 0 rgba(7, 183, 33, 0.464);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;

const RatesStyled = styled.div`
  margin-bottom: 1rem;
  padding: 8px;
  font-size: 16px;
  
`;

const RatesHeader = styled.h1`
  font-size: 25px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const Logout = styled.button`
  position: absolute;
  top: 2%;
  right: 3%;
  width: 5vw;
  height: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(186, 80, 66, 0.618);
  box-shadow: 0 8px 32px 0 rgba(206, 221, 208, 0.464);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  border-radius: 50%;
`;

const StyedLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const Master = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [ratesData, setRatesData] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState(0); // Varsayılan değer 0 olarak ayarlandı
  const [newAmount, setNewAmount] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [endDate, setEndDate] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = localStorage.getItem("jwtToken");
        const config = {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        };

        const response = await axios.get(
          "http://localhost:8080/api/v1/homeView",
          config
        );

        const {
          transactionResponseDtos,
          ratesResponseDtos,
          waddress,
          amount,
          newAmount,
          createDate,
          endDate,
        } = response.data;
        setTransactionData(transactionResponseDtos);
        setRatesData(ratesResponseDtos);
        setWalletAddress(waddress);
        setAmount(amount); // amount state'ine değeri kaydedildi
        setNewAmount(newAmount);
        setCreateDate(createDate);
        setEndDate(endDate);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <Logout>
        <StyedLink to="/">
          <LogoutIcon></LogoutIcon>
        </StyedLink>
      </Logout>
      <HalfContainer>
        <Area1>
          <p>WALLET ADRESS</p>
          <p>{walletAddress}</p>
        </Area1>
        <Area2>
          <p>AMOUNT</p>
          <p>{amount}</p>
        </Area2>
        <Area3>
          <RatesHeader> RATES</RatesHeader>
          {ratesData.map((rate, index) => (
            <RatesStyled>
              <p>Month: {rate.pack}</p>
              <p>Amount: {rate.amount}</p>
              <p>New Amount: {rate.newAmount}</p>
              <p>Create Date: {rate.createDate}</p>
              <p>End Date:{rate.endDate}</p>
            </RatesStyled>
          ))}
        </Area3>
        <Area4>
          <RatesHeader>TRANSACTİONS</RatesHeader>
          {transactionData.map((transaction, index) => (
            <RatesStyled key={index}>
              <p>Amount: {transaction.amount}</p>
              <p>Date: {transaction.transactionDate}</p>
              <p>Sent Wallet Address: {transaction.toWalletAddress}</p>
            </RatesStyled>
          ))}
        </Area4>
        <Home1>
          <StyledLink to="/SendMoneyP">
            <CallMadeIcon />
          </StyledLink>
        </Home1>
        <Home2>
          <StyledLink to="/InterestP">
            <PercentIcon />
          </StyledLink>
        </Home2>
        <Home3>
          <StyledLink to="/MoneyPage">
            <CallReceivedIcon />
          </StyledLink>
        </Home3>
      </HalfContainer>
    </Container>
  );
};

export default Master;
