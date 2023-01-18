import "../../app.css";
import Topbar from "../../componenets/topbar/Topbar";
import envelopeIcon from "../../asseets/images/envelopeIcon.png";
import Btn from "../../componenets/btn/Btn";
import { Link } from "react-router-dom";
import PasswordFeild from "../../componenets/passwordFeild/PasswordFeild";

export default function ChangePassword() {
  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-center mx-4">
        <div id="loginSection" className="col-12 col-md-4">
          <img src={envelopeIcon} alt="icon not found" className="mb-3" />
          <div>
            <h2>Check your email.</h2>
            <p>We’ve sent a password reset link at: </p>
            <p>email@mail.com</p>
          </div>
          <p>
            Didn’t recieve the email? <b><Link id="anchor" to="/new-password">Click to resend.</Link></b>
          </p>
          <Link id="anchor" className="my-3" to="/">
            &#8592; Back to login
          </Link>
        </div>
      </div>
    </>
  );
}
