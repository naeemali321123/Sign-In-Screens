import "./emailFeild.css";

export default function EmailFeild() {
  return (
    <>
      <div className="mb-3">
        <input
          type="email"
          required
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Your email"
        />
      </div>
    </>
  );
}
