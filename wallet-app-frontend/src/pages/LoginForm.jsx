import React, { useState } from 'react';
import styled from 'styled-components';
import bacgroundImage from "../assets/login.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
  background-image: url(${bacgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HalfContainer = styled.div`
  position: fixed;
  left: 4%;
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

const Button1 = styled.button`
  position: absolute;
  top: 80%;
  left: 3%;
  width: 40%;
  height: 15%;
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
  cursor: pointer;
`;

const Input = styled.input`
  position: fixed;
  top: 20%;
  width: 50%;
  height: 10%;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`;

const PasswordInput = styled.input`
  position: fixed;
  top: 35%;
  width: 50%;
  height: 10%;
  background: rgba(0, 113, 146, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`;



const Button3 = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  width: 40%;
  height: 15%;
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
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const LoginForm = () => {
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/generateToken", {
        tc,
        password,
      });
      console.log("Response Data:", response.data);  // Backend'den gelen yanıtı konsola yazdır
      const token = response.data.accessToken;  // response.data içeriğinden token'ı alın
      console.log("JWT Token:", token);  // Token'ı konsola yazdır
      localStorage.setItem("jwtToken", token);
      setToken(token);
      navigate("/Master");
    } catch (error) {
      console.error("Giriş başarısız:", error);
      alert("Giriş başarısız, lütfen bilgilerinizi kontrol edin.");
    }
  };

  return (
    <Container>
      <HalfContainer>
        <Input
          placeholder="TC Giriniz"
          maxLength="11"
          type="text"
          value={tc}
          onChange={(e) => setTc(e.target.value)}
        />
        <PasswordInput
          type="password"
          placeholder="Parola"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button1 onClick={handleLogin}>LOGİN</Button1>
        
        <Button3>
          <StyledLink to="/RegisterForm">New Account</StyledLink>
        </Button3>
        <StyledLink to="/Restart">Restart Password</StyledLink>
      
      </HalfContainer>
    </Container>
  );
};

export default LoginForm;
