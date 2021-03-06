import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaArrowDown } from "react-icons/fa";

function DecrementButton({ buttonId, setLength, stateValue }) {
  const { playPauseButton, setMinutes } = useContext(Context);

  return (
    <button
      aria-label="Decrement value"
      className="arrow"
      id={buttonId}
      onClick={() => {
        if (playPauseButton === false) {
          setLength((prevState) => {
            if (prevState > 1) {
              return prevState - 1;
            } else {
              return 1;
            }
          });
        }
       
        if (stateValue && playPauseButton === false) {
          setMinutes((prevState) => {
            if (prevState > 1) {
              return prevState - 1;
            } else {
              return 1;
            }
          });
        }
      }}
    >
      <FaArrowDown
        className={playPauseButton ? "arrow-disabled" : "arrow-enabled"}
      />
    </button>
  );
}

export default DecrementButton;
