import { Button } from "@/components/ui/button";
import safetyImage from "../../../assets/images/Safety_Image.png";
import { Link } from "react-router";

export default function Safety() {
  return (
    <div className="mt-20 space-y-10 p-2 md:p-0">
      <div className="flex flex-col items-center space-y-3">
        <p className="bg-muted-foreground/30 px-3 rounded-lg text-muted-foreground font-bold">
          safety
        </p>
        <h1 className="text-3xl font-bold text-primary">
          Your safety is our first priority
        </h1>
      </div>

      <div className="border border-primary rounded-lg flex flex-col md:flex-row justify-center items-center gap-10 px-10 py-5 md:py-0">
        <div className="lg:w-1/2">
          <img src={safetyImage} />
        </div>

        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-primary">
            We want all of us to be on the same page about safety.
          </h1>
          <p className="text-muted-foreground">
            And so, we're calling this page our safety fact- a 3 sided alliance
            between passengers, drivers and inDriver, with mutual
            responsibilities for every single role
          </p>
          <Link to="/about" >
            <Button className="cursor-pointer">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
