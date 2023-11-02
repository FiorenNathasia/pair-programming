import SizeCard from "../SizeCard/SizeCard";
import "./FlippableCard.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippablecard__container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <SizeCard
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}
