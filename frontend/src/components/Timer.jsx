import { useEffect, useState } from "react";

const Timer = ({ initialMinutes = 5, onTimeUp }) => {
  const [time, setTime] = useState(initialMinutes * 60);
  // const [time, setTime] = useState(initialMinutes * 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-xl font-bold text-red-500">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </div>
  );
};

export default Timer;
