import "../../app.css";
import Topbar from "../../componenets/topbar/Topbar";
import keyImg from "../../asseets/images/keyIcon.png";
import Btn from "../../componenets/btn/Btn";
import { Link, useNavigate } from "react-router-dom";
import PasswordFeild from "../../componenets/passwordFeild/PasswordFeild";

export default function SetNewPassportPage() {
  let navigate = useNavigate();
  const submitHandlar = () => {
    navigate("/successfully-Changed")
  };
  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-center mx-4">
        <div id="loginSection" className="col-12 col-md-4">
          <img src={keyImg} alt="icon not found" className="mb-3" />
          <div>
            <h2>Set new password</h2>
            <p>
              Your new password must be different from your previous password.
            </p>
          </div>
          <form className="my-4" onSubmit={submitHandlar}>
            <PasswordFeild
              placeholder="Password"
              label="Must be at least 8 characters"
            />
            <PasswordFeild placeholder="Confirm Password" />
            <Btn title="Reset Password?" />
          </form>
          <Link id="anchor" className="my-3" to="/">
            &#8592; Back to login
          </Link>
        </div>
      </div>
    </>
  );
}
