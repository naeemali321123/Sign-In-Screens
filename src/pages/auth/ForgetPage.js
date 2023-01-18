import "../../app.css";
import Topbar from "../../componenets/topbar/Topbar";
import keyImg from "../../asseets/images/keyIcon.png";
import EmailFeild from "../../componenets/emailFeild/EmailFeild";
import Btn from "../../componenets/btn/Btn";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetPage() {
  let navigate = useNavigate();
  const submitHandlar =()=>{
    navigate("/change-password")
  }
  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-center mx-4">
        <div id="loginSection" className="col-12 col-md-4">
          <img src={keyImg} alt="icon not found" className="mb-3" />
          <div>
            <h2>Forgot password?</h2>
            <p>We will send you the reset link on your email</p>
          </div>
          <form className="my-4" onSubmit={submitHandlar}>
            <EmailFeild />
            <Btn title="Reset Password?" />
          </form>
          <Link id="anchor" className="my-3" to="/">&#8592; Back to login</Link>
        </div>
      </div>
    </>
  );
}
