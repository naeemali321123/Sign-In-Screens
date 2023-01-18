import "./formSection.css"
import EmailFeild from "../emailFeild/EmailFeild";
import PasswordFeild from "../passwordFeild/PasswordFeild";
import Btn from "../btn/Btn";
import ForgetSection from "../forgetSection/ForgetSection";
import RobotSection from "../robotSection/RobotSection";
import { useNavigate } from "react-router-dom";

export default function LoginScreen(props) {
  let navigate = useNavigate();
  const submitHandlar=()=>{
    navigate("/change-password")
  }
  return (
    <>
      <div className="d-flex justify-content-center mx-4">
        <div id="loginSection" className="col-12 col-md-4">
          <h2>Sign in</h2>
          <form onSubmit={submitHandlar}>
            <EmailFeild />
            <PasswordFeild placeholder="Password"/>
            <Btn title="Sign in" />
          </form>
          <ForgetSection title={props.pageName} />
          <RobotSection />
        </div>
      </div>
    </>
  );
}
