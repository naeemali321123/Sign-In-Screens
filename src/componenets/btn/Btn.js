import "./btn.css";

export default function Btn(props) {
  return (
    <>
      <button type="submit" id="btn">
        {props.title}
      </button>
    </>
  );
}
