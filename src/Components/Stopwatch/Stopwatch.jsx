import { useState, useRef, useEffect } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunnig] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunnig(true);
    startTimeRef.current = Date.now() - timeElapsed;
  };

  const stop = () => setIsRunnig(false);

  const reset = () => {
    setTimeElapsed(0);
    setIsRunnig(false);
  };

  const formatTime = () => {
    let hours = Math.floor(timeElapsed / (1000 * 60 * 60));
    let minutes = Math.floor(timeElapsed / (1000 * 60) % 60);
    let seconds = Math.floor(timeElapsed / 1000 % 60);
    let milisecond = Math.floor((timeElapsed % 1000) / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milisecond = String(milisecond).padStart(2, '0');

    return `${minutes}:${seconds}:${milisecond}`;
  };

  return (
    <div className="stopwatch">
      <div className="display"> {formatTime()} </div>
      <div className="controls">
        <button onClick={start} className="startButton">
          Start
        </button>
        <button onClick={stop} className="stopButton">
          Stop
        </button>
        <button onClick={reset} className="resetButton">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
