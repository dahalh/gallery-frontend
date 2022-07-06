import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/register-login/RegistrationPage";
import LoginPage from "./pages/register-login/LoginPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
