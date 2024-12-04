import { useState, useRef, useEffect } from "react";

export default function Countdown() {
    const [countdown, setCountdown] = useState(60);
    const intervalId = useRef(null);

    const start = () => {
        clearInterval(intervalId);
        intervalId.current = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                    clearInterval(intervalId.current);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);
    };

    const reset = () => {

stop();
        setCountdown(60);
    };

    const stop = () => {
        clearInterval(intervalId.current);
    };

    return (
        <div>
            <h1>{countdown}</h1>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}