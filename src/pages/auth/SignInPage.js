import "../../app.css";
import FormSection from "../../componenets/formSection/FormSection";
import Topbar from "../../componenets/topbar/Topbar";
export default function SignInPage() {
  return (
    <>
      <div id="container">
        <Topbar />
        <FormSection pageName="Forgot password?" />
      </div>
    </>
  );
}
