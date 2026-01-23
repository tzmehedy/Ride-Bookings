
import { Button } from "@/components/ui/button";
import heroBackgroundImg from "../../../assets/images/HeroBannerBackground.jpg"
import heroLeftImage from "../../../assets/images/HeroLeft.png"

export default function HeroSection() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      className="m-5 lg:m-0 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300   bg-blend-overlay"
    >
      <div className="flex flex-col md:flex-row justify-center items-center p-5 m-5">
        <div className="">
          <img
            className="w-[400px] transition-all ease-in -duration-300 animate-fade-in-up"
            src={heroLeftImage}
            alt=""
          />
        </div>

        <div className=" flex flex-col gap-5 animate-fade-in-right">
          <h1 className="text-5xl font-bold text-primary">
            Real-Time Ride ETA & Tracking <br />
            <strong className="text-white text-3xl"> Know exactly when your ride will arrive — instantly. </strong>
          </h1>

          <p className="text-white">
           Track your driver’s location, get accurate estimated time of arrival (ETA), and stay informed from booking to drop-off.
          </p>

          <div className="flex space-x-3">
            <Button className="cursor-pointer">Get Started</Button>

            <Button
              className="cursor-pointer border border-primary"
              variant="outline"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
