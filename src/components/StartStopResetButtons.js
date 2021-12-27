import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function StartStopResetButtons() {
  const {
    playPauseButton,
    setPlayPauseButton,
    audioRef,
    setMinutes,
    setSeconds,
    setSessionLength,
    setBreakLength,
    setState,
  } = useContext(Context);

  return (
    <div className="controlButtons">
      <div id="playPauseButtons">
        {!playPauseButton ? (
          <button
            aria-label="Play button"
            id="start_stop"
            onClick={() => setPlayPauseButton(true)}
          >
            <FaPlay />
          </button>
        ) : (
          <button
            aria-label="Pause button"
            id="start_stop"
            onClick={() => setPlayPauseButton(false)}
          >
            <FaPause />
          </button>
        )}
      </div>
      <button
        id="reset"
        onClick={() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setPlayPauseButton(false);
          setMinutes(25);
          setSeconds(0);
          setSessionLength(25);
          setBreakLength(5);
          setState("session");
        }}
      >
        <FiRefreshCw />
      </button>
    </div>
  );
}

export default StartStopResetButtons;
