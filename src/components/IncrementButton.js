import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaArrowUp } from "react-icons/fa";

function IncrementButton({ buttonId, setLength, stateValue }) {
  const { playPauseButton, setMinutes } = useContext(Context);

  return (
    <button
      aria-label="Increment value"
      className="arrow"
      id={buttonId}
      onClick={() => {

        if (playPauseButton === false) {
          setLength((prevState) => {
            if (prevState < 60) {
              return prevState + 1;
            } else {
              return prevState;
            }
          });
        }
        if (stateValue && playPauseButton === false) {
          setMinutes((prevState) => {
            if (prevState < 60) {
              return prevState + 1;
            } else {
              return prevState;
            }
          });
        }
      }}
    >
      <FaArrowUp className={playPauseButton ? "arrow-disabled" : "arrow"} />
    </button>
  );
}

export default IncrementButton;
