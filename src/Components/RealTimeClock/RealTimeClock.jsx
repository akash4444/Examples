import React, {useState, useEffect} from "react";
import "./RealTimeClock.css";

const RealTimeClock = () => {
    const [clockTime, setClockTime] = useState(new Date());
    const [is24HourFormat, setIs24HourFormat] = useState(true);

    useEffect(() => {
        const timerId = setInterval(() => {
            setClockTime(new Date());
        }, 1000);

        return() => clearInterval(timerId);
    }, []);

    const formatTime = (date) => {

        let hours = is24HourFormat ? `${
            (date.getHours())
        }`.padStart(2, "0") : `${
            (date.getHours() % 12 || 12)
        }`.padStart(2, "0");
        let minutes = `${
            date.getMinutes()
        }`.padStart(2, "0");
        let seconds = `${
            date.getSeconds()
        }`.padStart(2, "0");


        return `${hours}:${minutes}:${seconds}`
    };

    return (
        <div className="text-center mt-5">
            <h1>{
                formatTime(clockTime)
            }</h1>
            <button className="btn btn-primary mt-3"
                onClick={
                    () => setIs24HourFormat(!is24HourFormat)
            }>
                Toggle to {
                is24HourFormat ? '12-hour' : '24-hour'
            }
                format
            </button>
        </div>
    );
}

export default RealTimeClock;

