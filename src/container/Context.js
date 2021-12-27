import React, { useState, useEffect, useRef } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [state, setState] = useState("session");
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [playPauseButton, setPlayPauseButton] = useState(false);
  const audioRef = useRef();
  const [play, setPlay] = useState(false);

  let audioSrc =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

  if (minutes === 0 && seconds === 0 && play) {
    audioRef.current.load();
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => { }).catch((err) => console.log(err));
    }
  }


  function updateTime() {

    minutes === 0 ? setPlay(true) : setPlay(false);
    if (minutes === 0 && seconds === 0) {

      if (state === "session") {

        setState("break");
        setSeconds(0);
        setMinutes(breakLength);

      } else {

        setState("session");
        setSeconds(0);
        setMinutes(sessionLength);

      }
    } else {
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  }

  useEffect(() => {
    if (playPauseButton) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  });

  return (
    <Context.Provider
      value={{
        breakLength,
        setBreakLength,
        sessionLength,
        setSessionLength,
        seconds,
        setSeconds,
        playPauseButton,
        setPlayPauseButton,
        minutes,
        setMinutes,
        state,
        setState,
        audioSrc,
        audioRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
