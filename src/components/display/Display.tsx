import "./display.css";

export default function Display({ value, op }: any) {
  return (
    <div className="display">
      <input className="inputs" value={op} readOnly />
      <input className="inputs" value={value} readOnly />
    </div>
  );
}
