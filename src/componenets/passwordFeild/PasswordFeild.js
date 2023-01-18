import "./passwordFeild.css";
import view from "../../asseets/images/view.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PasswordFeild(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const showPasswordHandlar = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };
  return (
    <>
      <div className="mb-3 d-flex">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder={props.placeholder}
        />
        <div id="viewIcon" className="p-2" onClick={showPasswordHandlar}>
          <Link to="#">
            <img src={view} alt="Icon Not Found" />
          </Link>
        </div>
      </div>
        <label
          className="d-flex justify-content-left"
          htmlFor="exampleInputPassword1"
        >
          {props.label}
        </label>
    </>
  );
}
