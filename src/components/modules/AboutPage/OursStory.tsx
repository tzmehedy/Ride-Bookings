import { useEffect, useState } from "react";
import ourMissionImage from "../../../assets/images/OursMissionImage.jpg"

export default function OursStory() {
    const [experiencedTime, setExperiencedTime] = useState(0);
    const [professionalDriverCount, setProfessionalDriverCount] = useState(0)

    useEffect(() => {
      const timerIdForExperienced = setInterval(() => {
        setExperiencedTime((prev) => (prev < 20 ? prev + 1 : 20));
      }, 200)
      return () => clearInterval(timerIdForExperienced);
    }, []);


    useEffect(()=>{
        const timerIdForDriverCount = setInterval(() => {
          setProfessionalDriverCount((prev) => (prev < 1000 ? prev + 1 : 1000));
        }, 1);
        return () => clearInterval(timerIdForDriverCount);
    },[])
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-20 gap-10 p-5 lg:p-0">
      <div className="lg:w-1/2 space-y-3">
        <h1 className="text-3xl font-bold text-primary">
          Fueling Connections The Story <br /> behind Cabsy
        </h1>
        <p className="text-justify">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est qui dolorem ipsum Voluptas
          sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est
          qui dolorem ipsum
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
