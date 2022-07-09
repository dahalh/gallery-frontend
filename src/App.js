import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/register-login/RegistrationPage";
import LoginPage from "./pages/register-login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerification from "./pages/register-login/EmailVerification";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { UserProfile } from "./pages/user-profile/UserProfile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-profile" element={<UserProfile />} />

          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/user/verify-email" element={<EmailVerification />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
