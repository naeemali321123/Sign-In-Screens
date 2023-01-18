import LoginScreen from "../../componenets/formSection/FormSection";
import Topbar from "../../componenets/topbar/Topbar";

export default function ResetPage() {
  return (
    <>
      <div id="container">
        <Topbar />
        <LoginScreen pageName="Reset password?" />
      </div>
    </>
  );
}
