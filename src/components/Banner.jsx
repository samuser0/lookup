import React, { useState, useEffect } from 'react';

const Banner = ({ description, link, initialTime, visible }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!visible || timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, visible]);

  if (!visible || timeLeft <= 0) return null;
  
  const handleReset = ()=>{
    setTimeLeft(initialTime)
  }

  return (
    <div className="banner">
      <div className="countdown">Time left: {timeLeft} seconds</div>
      <div className="description">{description}</div>
      {link && <a href={link} className="banner-link">Learn More</a>}
      <button onClick={handleReset}>Reset Clock</button>
    </div>
  );
};

export default Banner;
