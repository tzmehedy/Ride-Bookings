import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import testimonial1 from "../../../assets/images/testimonial1.jpg"
import testimonial2 from "../../../assets/images/testimonial2.jpg"
import testimonial3 from "../../../assets/images/testimonial3.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-5xl text-primary font-bold text-center">
          Testimonials
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-10 p-12 gap-16">
        <div className="md:w-1/3 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-muted-foreground">
            Our Client's Review
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            inventore sequi voluptates aliquam ad quia sint? Vel dolorem nisi
            incidunt, tempora ullam culpa, mollitia ea doloremque molestiae odio
            ex iure.
          </p>
        </div>

        <div className="md:w-2/3 ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="border border-primary/70 rounded-2xl p-5"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial1} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Alias earum possimus sint facere nulla veniam
                        cupiditate in iusto error numquam.
                      </p>
                      <h1 className="text-xl font-bold text-primary">
                        Mrs Maria
                      </h1>
                      <p className="text-muted-foreground">London,Uk</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial2} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Alias earum possimus sint facere nulla veniam
                        cupiditate in iusto error numquam.
                      </p>
                      <h1 className="text-xl font-bold text-primary">
                        Mr John
                      </h1>
                      <p className="text-muted-foreground">London,Uk</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial3} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Alias earum possimus sint facere nulla veniam
                        cupiditate in iusto error numquam.
                      </p>
                      <h1 className="text-xl font-bold text-primary">
                        Mr Madry
                      </h1>
                      <p className="text-muted-foreground">London,Uk</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial1} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Alias earum possimus sint facere nulla veniam
                        cupiditate in iusto error numquam.
                      </p>
                      <h1 className="text-xl font-bold text-primary">
                        Mrs Maria
                      </h1>
                      <p className="text-muted-foreground">London,Uk</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
