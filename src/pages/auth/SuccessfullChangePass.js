import "../../app.css";
import Topbar from "../../componenets/topbar/Topbar";
import tickIcon from "../../asseets/images/tickIcon.png";
import EmailFeild from "../../componenets/emailFeild/EmailFeild";
import Btn from "../../componenets/btn/Btn";
import { Link, useNavigate } from "react-router-dom";

export default function SuccessfullChangePass() {
  let navigate = useNavigate();
  const submitHandlar = () => {
    navigate("/");
  };
  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-center mx-4">
        <div id="loginSection" className="col-12 col-md-4">
          <img src={tickIcon} alt="icon not found" className="mb-3" />
          <div>
            <h2>Password reset</h2>
            <p>
              Your password has been succesfully reset.<br/>Click below to log in.
            </p>
          </div>
          <form className="my-4" onSubmit={submitHandlar}>
            <Btn title="Continue" />
          </form>
          <Link id="anchor" className="my-3" to="/new-password">
            &#8592; Back to login
          </Link>
        </div>
      </div>
    </>
  );
}
