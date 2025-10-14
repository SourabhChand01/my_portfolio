import { useState, useEffect } from "react";

const TimeZone = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
     {time.toLocaleTimeString("en-IN")} IST
     </>
  );
};
export default TimeZone;