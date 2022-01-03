import React, { useState, useEffect, createContext } from "react"
import { Routes, Route } from "react-router-dom"
import './App.css';
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VerifyPage from "./pages/VerifyPage";
import NavBar from "./components/Header";
import StartPage from "./pages/StartPage";
import GlobalStyles from "./components/styles/Global";

export const CustomerContext = createContext({})

function App() {
  const [customerData, setCustomerData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData() {
    const url = "https://frebi.willandskill.eu/api/v1/customers/"
    const token = localStorage.getItem("admin-token")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => setCustomerData(data.results))
  }
  return (
    <CustomerContext.Provider value={{ customerData, setCustomerData, fetchData }}>
      <GlobalStyles />
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<VerifyPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </CustomerContext.Provider>
  );
}

export default App;
