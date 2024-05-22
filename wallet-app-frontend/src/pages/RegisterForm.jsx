import React, { useState } from "react";
import styled from "styled-components";
import bacroundImage from "../assets/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  right: 4%;
  top: 5%;
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
`;

const TcGiris = styled.input`
  position: fixed;
  top: 8%;
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

const StyedLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const Button2 = styled.button`
  position: absolute;
  top: 80%;
  left: 55%;
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
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }
`;

const FırstName = styled.input`
  position: fixed;
  top: 32%;
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

const LastName = styled.input`
  position: fixed;
  top: 44%;
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

const Birthday = styled.input`
  position: fixed;
  top: 56%;
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

const Email = styled.input`
  position: fixed;
  top: 68%;
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

const RegisterForm = () => {
  const [tc, setTc] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birth_day, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/v1/save", {
        tc,
        password,
        first_name,
        last_name,
        birth_day,
        email,
        authorities: ["ROLE_USER"],
      });
      console.log("Kayıt başarılı First Name:", response.data.first_name);
      alert(`Merhaba ${response.data.first_name}, bu hash kodu şifre sıfırlamak için lütfen bir yere not et: ${response.data.password_restart_hash}`);
      localStorage.setItem("resetPasswordHash", response.data.password_restart_hash); // Hash'i localStorage'a kaydet
      navigate("/"); // Kullanıcıyı HomePage'e yönlendir
    } catch (error) {
      console.error("Kayıt başarısız:", error);
    }
  };

  return (
    <Container>
      <HalfContainer>
        <TcGiris
          placeholder="Tc Giriniz"
          maxLength="11"
          typeof="number"
          value={tc}
          onChange={(e) => setTc(e.target.value)}
        />
        <PasswordInput
          type="password"
          placeholder="Parola giriniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FırstName
          placeholder="İsim"
          type="text"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <LastName
          placeholder="Soyisim"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Birthday
          placeholder="Doğum Tarihi"
          type="date"
          value={birth_day}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <Email
          placeholder="E-posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button1 onClick={handleRegister}>Register</Button1>
        <Button2>
          <StyedLink to="/">Home</StyedLink>
        </Button2>
      </HalfContainer>
    </Container>
  );
};

export default RegisterForm;
