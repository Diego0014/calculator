import "./button.css";

export default function Button({ className, value, onClick }: any) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
