
import { Button } from "@/components/ui/button";
import heroBackgroundImg from "../../../assets/images/HeroBannerBackground.jpg"
import heroLeftImage from "../../../assets/images/HeroLeft.png"

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      className=" m-3 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300 bg-muted-foreground bg-blend-multiply"
    >
      <div className="flex flex-col md:flex-row justify-center items-center p-5 m-5">
        <div className="">
          <img className="w-[400px]" src={heroLeftImage} alt="" />
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="text-4xl font-bold text-foreground">
            Understand user flow and
            <strong className="text-primary"> increase </strong>
            conversions
          </h1>

          <p className="text-background">
            Whether you’re commuting to work, meeting friends, or exploring new
            places, our service offers a smart, safe, and eco-friendly way to
            get around.
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
    </section>
  );
}
