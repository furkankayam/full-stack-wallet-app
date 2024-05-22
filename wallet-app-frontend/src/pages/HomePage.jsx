import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import bacgroundImage from "../assets/home.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  width: 46%;
  height: 100%;
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

const Button3 = styled.button`
  position: fixed;
  top: 37%;

  width: 50%;
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

const Button4 = styled.button`
  position: fixed;
  top: 47%;

  width: 50%;
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

const Button5 = styled.button`
  position: fixed;
  top: 57%;

  width: 50%;
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

const Button6 = styled.button`
  position: fixed;
  top: 67%;

  width: 50%;
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

const Button7 = styled.button`
  position: fixed;
  top: 77%;

  width: 50%;
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

const AnimatedButton3 = motion(Button3);
const AnimatedButton4 = motion(Button4);
const AnimatedButton5 = motion(Button5);
const AnimatedButton6 = motion(Button6);
const AnimatedButton7 = motion(Button7);

const Header = styled.h1`
  position: fixed;
  display: flex;
  top: 15%;
  font-size: 70px;
  border: none;
`;

const Header2 = styled.h1`
  position: fixed;
  top: 25%;
  display: flex;
  font-size: 70px;
  border: none;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

const HomePage = () => {
  return (
    <Container>
      <HalfContainer>
        <Header>YİĞİDO TOKEN 
        </Header>
      <Header2>Hızlı Menü</Header2>
        <AnimatedButton3
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <StyledLink to="/SendMoneyP">Para Gönder</StyledLink>
        </AnimatedButton3>

        <AnimatedButton4
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <StyledLink to="/MoneyPage">Para Yükle</StyledLink>
        </AnimatedButton4>

        <AnimatedButton5
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <StyledLink to="/Restart">Parola sıfırla</StyledLink>
        </AnimatedButton5>

        <AnimatedButton6
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <StyledLink to="/Master">Cüzdanım</StyledLink>
        </AnimatedButton6>

        <AnimatedButton7
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
        >
          <StyledLink to="/InterestP">Faiz</StyledLink>
        </AnimatedButton7>
      </HalfContainer>
      <Footer />
    </Container>
  );
};

export default HomePage;
