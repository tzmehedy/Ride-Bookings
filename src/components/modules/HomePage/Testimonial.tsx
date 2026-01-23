import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import testimonial1 from "../../../assets/images/testimonial1.jpg";
import testimonial2 from "../../../assets/images/testimonial2.jpg";
import testimonial3 from "../../../assets/images/testimonial3.jpg";
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
            We’re trusted by riders who value accuracy, transparency, and
            real-time updates. Here’s what our users say about their experience
            with Ride-Sharing ETA.
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
                  <Card className="h-125">
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial1} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Ride-Sharing ETA makes waiting for a ride stress-free. I
                        always know exactly when my driver will arrive, and the
                        live tracking is incredibly accurate. It’s simple, fast,
                        and reliable.
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
                  <Card className="h-125">
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial2} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        The real-time ETA updates are spot on. I use this
                        service regularly, and it helps me plan my time better —
                        especially during busy hours. Highly recommended!
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
                  <Card className="h-125">
                    <CardContent className="space-y-2 flex flex-col">
                      <img className="rounded-xl" src={testimonial3} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify ">
                        Sharing my ride ETA with family gives me peace of mind.
                        The interface is clean, and the updates are smooth from
                        booking to pickup.
                      </p>
                      <div className="mt-6 space-y-2">
                        <h1 className="text-xl font-bold text-primary">
                          Mr Madry
                        </h1>
                        <p className="text-muted-foreground">London,Uk</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card className="h-125">
                    <CardContent className="space-y-2">
                      <img className="rounded-xl" src={testimonial1} alt="" />
                      <div className="w-10 h-10 border-2 rounded-full flex items-center justify-center bg-muted relative -top-8 left-2">
                        <Quote className="text-primary"></Quote>
                      </div>
                      <p className="text-justify">
                        Ride-Sharing ETA makes waiting for a ride stress-free. I
                        always know exactly when my driver will arrive, and the
                        live tracking is incredibly accurate. It’s simple, fast,
                        and reliable.
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
