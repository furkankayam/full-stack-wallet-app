import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import backgroundImage from "../assets/register.jpg";
import axios from "axios";

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
  right: 4%;
  top: 16%;
  width: 40%;
  height: 70%;
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
  width: 50%;
  height: 10%;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  margin-bottom: 20px;
`;

const Button1 = styled.button`
  width: 50%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(146, 0, 7, 0.468);
  box-shadow: 0 8px 32px 0 rgba(159, 8, 8, 0.621);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
`;

const Home = styled.button`
  position: absolute;
  top: 2%;
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
const StyedLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const Restart = () => {
  const [tc, setTc] = useState("");
  const [hash, setHash] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleRestartPassword = async () => {


    const requestData = {
      tc,
      hash,
      newPassword
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/restartPassword", requestData, {
       
      });
      console.log("Response:", response.data);
      console.log("Kayıt başarılı First Name:", response.data.first_name);
      alert(`Merhaba, bu yeni sıfırlama kodunuz şifre sıfırlamak için lütfen bir yere not edin: ${response.data.newHash}`);
      localStorage.setItem("resetPasswordHash", response.data.password_restart_hash);
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Failed to reset password");
    }
  };

  return (
    <Container>
      <Home>
        <StyedLink to="/">
          <HomeRoundedIcon />
        </StyedLink>
      </Home>
      <HalfContainer>
        <Input
          placeholder="TC"
          value={tc}
          onChange={(e) => setTc(e.target.value)}
        />
        <Input
          placeholder="Hash"
          value={hash}
          onChange={(e) => setHash(e.target.value)}
        />
        <Input
          placeholder="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Button1 onClick={handleRestartPassword}>
          Restart Password
        </Button1>
      </HalfContainer>
    </Container>
  );
};

export default Restart;
