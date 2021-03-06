import React, { useContext } from "react";
import { Context } from "../container/Context";

import StartStopResetButtons from "./StartStopResetButtons";

function Clock() {
  const { state, minutes, seconds } = useContext(Context);

  return (
    <div className="clock">
      <div id="timer-label">{state === "session" ? "Session" : "Break"}</div>
      <div id="time-left">
        {`${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`}
      </div>
      <StartStopResetButtons />
    </div>
  );
}

export default Clock;
