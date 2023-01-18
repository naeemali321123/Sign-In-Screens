import   "./robotSection.css";
import { Link } from "react-router-dom";
import captchmaImg from "../../asseets/images/captchaImage.png";

export default function RobotSection() {
  return (
    <>
      <div
        id="robotSection"
        className="d-flex justify-content-between px-3 p-2 align-items-center "
      >
        <div className="mb-3 form-check pt-3">
          <input type="checkbox" className="form-check-input" id="robotCheck" />
          <label htmlFor="robotCheck">I’m not a robot</label>
        </div>
        <div>
          <Link
            id="captchaImg"
            className="d-flex flex-column align-items-center"
            to={"#"}
          >
            <img src={captchmaImg} alt="" />
            <span id="captchaTxt">
              reCaptcha <br />
              Privacy-Terms
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
