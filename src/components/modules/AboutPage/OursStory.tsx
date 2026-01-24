import { useEffect, useState } from "react";
import ourMissionImage from "../../../assets/images/OursMissionImage.jpg";

export default function OursStory() {
  const [experiencedTime, setExperiencedTime] = useState(0);
  const [professionalDriverCount, setProfessionalDriverCount] = useState(0);

  useEffect(() => {
    const timerIdForExperienced = setInterval(() => {
      setExperiencedTime((prev) => (prev < 20 ? prev + 1 : 20));
    }, 200);
    return () => clearInterval(timerIdForExperienced);
  }, []);

  useEffect(() => {
    const timerIdForDriverCount = setInterval(() => {
      setProfessionalDriverCount((prev) => (prev < 1000 ? prev + 1 : 1000));
    }, 1);
    return () => clearInterval(timerIdForDriverCount);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-20 gap-10 p-5 lg:p-0">
      <div className="lg:w-1/2 space-y-3">
        <h1 className="text-3xl font-bold text-primary">
          Fueling Connections The Story <br /> behind Cabsy
        </h1>
        <p className="text-justify">
          Ride-Sharing ETA is a simple, fast, and reliable web tool designed to
          give you real-time information about your ride’s Estimated Time of
          Arrival (ETA) — from the moment a driver accepts your trip to when
          they reach you. Our goal is to keep riders informed, confident, and
          stress-free about when their ride will arrive. <br /> <br />We believe ride-sharing
          should be easy to understand and dependable, no matter where you are
          or what service you use.
        </p>
        <div className="flex  gap-10 mt-5">
          <div>
            <h1 className="text-5xl font-bold text-muted-foreground">
              {experiencedTime} <span className="text-primary">+</span>
            </h1>
            <p className="text-muted-foreground/80">Years of Experience</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-muted-foreground">
              {professionalDriverCount} <span className="text-primary">+</span>
            </h1>
            <p className="text-muted-foreground/80">Professional Drivers</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img className="rounded-xl" src={ourMissionImage} alt="" />
      </div>
    </div>
  );
}
