
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
         Ride Sharing ETA is a simple, intuitive tool that helps riders and <br />their contacts stay informed about ride arrival times. Our system calculates the estimated <br /> time for your ride to arrive and updates it in real time, <br /> so you can plan your journey with confidence.
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
              Request a ride instantly and track your driver in real time. Get accurate ETA updates and clear ride details so you always know when your ride will arrive.
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
              Need a ride for multiple stops or a longer duration? Book a vehicle by the hour and enjoy flexible travel with live tracking and time-based updates.
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
              Plan ahead by scheduling your ride in advance. Set your pickup time, location, and destination — we’ll keep you updated with timely reminders and ETA updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
