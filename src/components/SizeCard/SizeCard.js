import "./sizecard.scss";
import "./fliptransition.scss";
import image1 from "../../assets/image/illustrations/DrawKit-Fashion-Illustration-02.png";

export default function SizeCard({ onClick }) {
  return (
    <div className="sizecard" onClick={onClick}>
      <div className="sizecard__back">Back</div>
      <div className="sizecard__front">Front</div>
    </div>
  );
}
