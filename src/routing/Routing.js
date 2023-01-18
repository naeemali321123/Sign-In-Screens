import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "../pages/auth/ChangePassword";
import ForgetPage from "../pages/auth/ForgetPage";
import ResetPage from "../pages/auth/ResetPage";
import SetNewPassportPage from "../pages/auth/SetNewPassportPage";
import SignInPage from "../pages/auth/SignInPage";
import SuccessfullChangePass from "../pages/auth/SuccessfullChangePass";

export default function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/forget" element={<ForgetPage />} />
          <Route path="/new-password" element={<SetNewPassportPage />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/successfully-Changed" element={<SuccessfullChangePass />} />
        </Routes>
      </Router>
    </>
  );
}
