import React, { useState } from "react";
import backgroundImage from "../assets/Interest.jpg";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";


const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HalfContainer = styled.div`
  position: fixed;
  left: 4%;
  top: 10%;
  width: 30%;
  height: 80%;
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

const Input = styled.input`
  width: 70%;
  height: 10%;
  margin: 20px 0;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  text-align: center;
`;

const SpecialInput = styled(Input)`
  width: 50%;
  height: 10%;
  background: rgba(255, 0, 0, 0.25);
  border: 2px solid rgba(255, 0, 0, 0.5);
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
const StyedLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const InterestP = () => {
  const [pack, setPack] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = async () => {
    const token = localStorage.getItem("jwtToken");
    console.log("Token found:", token); // Token'ı kontrol etmek için ekledik
    if (!token) {
      alert("No token found");
      return;
    }

    const data = {
      pack: parseInt(pack),
      amount: parseInt(amount),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/sendRates",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Data sent successfully");
      console.log("Response:", response); // Başarılı istek durumunda yanıtı logla
    } catch (error) {
      console.error("Error sending data:", error);
      if (error.response) {
        // Sunucu yanıt verdi ve durum kodu 2xx aralığında değil
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // İstek yapıldı ancak yanıt alınamadı
        console.error("Request data:", error.request);
      } else {
        // İstek yapılandırırken bir şeyler ters gitti
        console.error("Error message:", error.message);
      }
      alert("Failed to send data");
    }
  };

  return (
    <div>
      <Container>
        <Home>
          <StyedLink to="/Master">
            <HomeRoundedIcon />
          </StyedLink>
        </Home>
        <HalfContainer>
          <SpecialInput
            placeholder="PACK"
            value={pack}
            onChange={(e) => setPack(e.target.value)}
          />
          <Input
            placeholder="AMOUNT"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Input type="button" value="SEND" onClick={handleSend} />
        </HalfContainer>
      </Container>
    </div>
  );
};

export default InterestP;
