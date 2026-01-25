import { Button } from "@/components/ui/button";
import callToActionImage from "../../../assets/images/CallToActionImage.jpg";
import { Link } from "react-router";

export default function CallToAction() {
  return (
    <section className="overflow-hidden bg-muted sm:grid sm:grid-cols-2 sm:items-center p-5 lg:p-0">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-muted-foreground md:text-3xl">
            Reliable Rides, Right on Time
          </h2>

          <p className="hidden text-muted-foreground/80 md:mt-4 md:block text-justify">
            Plan your journey with confidence using accurate, real-time ride
            tracking. Ride-Sharing ETA helps you know exactly when your driver
            will arrive, so you can save time, reduce waiting, and travel
            stress-free.
          </p>
          <p className="hidden text-muted-foreground/80 md:mt-4 md:block text-justify">
            Get live ETA updates, track your driver on the map, and share your
            ride status with friends or family — all in one simple experience.
          </p>

          <div className="mt-4 md:mt-8">
            <Link to="/ride-request">
              <Button className="rounded-sm bg-primary/90 px-12 py-3 flex justify-center items-center  font-medium text-white transition hover:bg-primary focus:ring-3 focus:ring-yellow-400 focus:outline-hidden cursor-pointer">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={callToActionImage}
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}
