"use client";
import { useEffect, useState } from "react";

const targetDate = new Date("2026-10-01T00:00:00+06:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = targetDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[70px] flex-col items-center rounded-xs bg-background/10 px-3 py-4 backdrop-blur-sm sm:min-w-[100px] sm:px-5 sm:py-5"
        >
          <span className="text-3xl font-bold tabular-nums sm:text-4xl md:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </span>

          <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-background/60 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
