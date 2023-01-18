import { Link } from "react-router-dom";
import "./forgetSection.css";

export default function ForgetSection(props) {
  return (
    <>
      <div id="forgetSection">
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1">Remember me</label>
        </div>
        <Link id="anchor" to="/forget">
          {props.title}
        </Link>
      </div>
    </>
  );
}
