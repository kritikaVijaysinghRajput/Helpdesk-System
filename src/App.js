import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/User/HomePage";
import ForgotPasswordPage from "./pages/User/ForgotPasswordPage";
import TicketHomePage from "./pages/OperationTeam/TicketHomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/home" element={<HomePage />} />
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/operationTeam/home" element={<TicketHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
