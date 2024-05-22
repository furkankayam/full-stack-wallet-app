import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './pages/LoginForm';
import InterestP from './pages/InterestP';
import MoneyPage from './pages/MoneyPage';
import RegisterForm from './pages/RegisterForm';
import Restart from './pages/Restart';
import SendMoneyP from './pages/SendMoneyP';
import Master from './pages/Master';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/InterestP' element={<InterestP />} />
        <Route path='/' element={<LoginForm />} />
        <Route path='/MoneyPage' element={<MoneyPage />} />
        <Route path='/RegisterForm' element={<RegisterForm />} />
        <Route path='/Restart' element={<Restart />} />
        <Route path='/SendMoneyP' element={<SendMoneyP />} />
        <Route path='/Master' element= {<Master />}/>
      </Routes>

    </div>
  )
}

export default App;