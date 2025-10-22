
import { Button } from "@/components/ui/button";
import callToActionImage from "../../../assets/images/CallToActionImage.jpg"

export default function CallToAction() {
  
  return (
    <section className="overflow-hidden bg-muted sm:grid sm:grid-cols-2 sm:items-center p-5 lg:p-0">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-muted-foreground md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-muted-foreground/80 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Button className="rounded-sm bg-primary/90 px-12 py-3 flex justify-center items-center  font-medium text-white transition hover:bg-primary focus:ring-3 focus:ring-yellow-400 focus:outline-hidden cursor-pointer">
              Get Started Today
            </Button>
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
