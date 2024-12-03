import { useState, useRef, useEffect } from "react";

export default function Countdown() {
    const [countdown, setCountdown] = useState(60);
    const intervalId = useRef(null); // Use useRef to hold the interval ID

    const start = () => {
        clearInterval(intervalId.current); // Clear any existing interval
        setCountdown(60); // Reset countdown to 60 before starting
        intervalId.current = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                    clearInterval(intervalId.current); // Clear interval when countdown reaches zero
                    return 0; // Prevent going below 0
                }
                return prevCountdown - 1;
            });
        }, 1000);
    };

    const reset = () => {
        clearInterval(intervalId.current); // Clear the interval
        setCountdown(60); // Reset countdown to 60
    };

    useEffect(() => {
        return () => {
            clearInterval(intervalId.current); // Clear interval on component unmount
        };
    }, 