
import Calender from "@/assets/icons/serviceIcons/Calender";
import Clock from "@/assets/icons/serviceIcons/Clock";
import RideSharingIcon from "@/assets/icons/serviceIcons/RideSharingIcon";


export default function Services() {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-4xl text-primary font-bold">Our Services</h1>
        <p className="text-3xl text-muted-foreground font-bold">
          The Ultimate Taxi Service Experience Awaits
        </p>
        <p className="text-muted-foreground/80">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis{" "}
          <br />
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-5 lg:p-0">
        <div className="bg-muted hover:bg-primary/80 shadow-2xl p-10 rounded-xl space-y-3 text-muted-foreground hover:text-background transition-all duration-700">
          <div className="bg-primary/40 h-10 w-10 rounded-full flex items-center justify-center p-3">
            <RideSharingIcon />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold ">Ride Sharing</h1>
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, ad.
            </p>
          </div>
        </div>
        <div className="bg-muted hover:bg-primary/80 shadow-2xl p-10 rounded-xl space-y-3 text-muted-foreground hover:text-background transition-all duration-700">
          <div className="bg-primary/40 h-10 w-10 rounded-full flex items-center justify-center p-3">
            <Clock></Clock>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold ">Hourly Rent</h1>
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, ad.
            </p>
          </div>
        </div>
        <div className="bg-muted hover:bg-primary/80 shadow-2xl p-10 rounded-xl space-y-3 text-muted-foreground hover:text-background transition-all duration-700">
          <div className="bg-primary/40 h-10 w-10 rounded-full flex items-center justify-center p-3">
            <Calender></Calender>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold ">Ride Schedule</h1>
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, ad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
