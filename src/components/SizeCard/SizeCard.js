import "./sizecard.scss";
import "./fliptransition.scss";

export default function SizeCard({ onClick }) {
  return (
    <div className="sizecard" onClick={onClick}>
      <div className="sizecard__back">Back</div>
      <div className="sizecard__front">Front</div>
    </div>
  );
}
