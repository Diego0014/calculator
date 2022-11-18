import "./display.css";

export default function Display({ value, op }: any) {
  return (
    <div className="display">
      <input className="inputs" value={op} disabled={true} />
      <input className="inputs" value={value} disabled={true} />
    </div>
  );
}
