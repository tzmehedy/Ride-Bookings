import Compass from "@/assets/icons/ourMissionIcons/compass";
import Flag from "@/assets/icons/ourMissionIcons/Flag";
import missionImage from "../../../assets/images/missionImage2.jpg"


export default function OurMission() {
  return (
    <div className="mt-20 space-y-10 p-5 lg:p-0">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-5xl text-primary font-bold">Our Mission</h1>
        <h1 className="text-3xl text-muted-foreground">
          Redefining Transportation for a Connected World
        </h1>
        <p className="text-muted-foreground/80">
          Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur{" "}
          <br />
          magni dolores porro quisquam est qui dolorem ipsum
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div className="border border-primary rounded-xl hover:bg-primary/70 p-5 transition-all duration-700 ease-in-out">
          <div className="h-12 w-12 bg-muted p-2 rounded-full flex justify-center items-center text-2xl">
            <Compass />
          </div>
          <h1 className="text-2xl font-bold text-muted-foreground">
            Our Vision
          </h1>
          <p className="text-muted-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam ipsa maiores! Molestiae, rerum ad.
          </p>
        </div>
        <div className="border border-primary rounded-xl hover:bg-primary/70 p-5 transition-all duration-700 ease-in-out">
          <div className="h-12 w-12 bg-muted p-2 rounded-full flex justify-center items-center text-2xl">
            <Flag />
          </div>
          <h1 className="text-2xl font-bold text-muted-foreground">
            Our Mission
          </h1>
          <p className="text-muted-foreground/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quisquam ipsa maiores! Molestiae, rerum ad.
          </p>
        </div>

        <div className="border border-primary p-2 rounded-xl">
          <img className="rounded-xl" src={missionImage} alt="" />
        </div>
      </div>
    </div>
  );
}
