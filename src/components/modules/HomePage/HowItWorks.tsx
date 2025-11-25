import { useState } from "react"
import img1 from "../../../assets/images/1.png"
import img2 from "../../../assets/images/2.png"
import img3 from "../../../assets/images/3.png"
import img4 from "../../../assets/images/4.png"

export default function HowItWorks() {
    const [imageLink, setImageLink] = useState(img1)
  return (
    <div className="container mx-auto mt-16 p-5 lg:p-0">
      <div>
        <h1 className="text-4xl font-bold text-center">
          How <span className="text-primary">Our Application</span> Work?
        </h1>
      </div>

      <div className="flex flex-col items-center mt-5 text-muted-foreground text-center space-y-5 ">
        <h1 className="text-3xl font-bold ">Simple Steps to Book Your Ride</h1>
        <p>
          Neque porro quisquam est qui dolorem ipsum adipisci velit, sed quia{" "}
          <br />
          non numquam eius modi tempora incidunt ut labore et
        </p>
      </div>

      <div className="border-b-2 border-primary mt-5 opacity-60">

      </div>

      <div className="mt-20 flex flex-col md:flex-row gap-5">
        <div className="space-y-10 w-full md:w-2/3">
          <button
            onClick={() => setImageLink(img1)}
            className="w-full text-start shadow-2xl p-3 cursor-pointer transition-all duration-100 rounded-lg border border-primary"
          >
            <h1 className="text-primary font-bold">1. Type Your Destination</h1>
            <p className="mb-5">
              Totam facilis laudantium cum accusamus ullam voluptatibus commodi{" "}
              <br />
              numquam, error, est. Ea, consequatur.
            </p>
          </button>
          <button
            onClick={() => setImageLink(img2)}
            className="w-full text-start shadow-2xl p-3 cursor-pointer transition-all duration-100 rounded-lg border border-primary"
          >
            <h1 className="text-primary font-bold">
              2. Confirm Pick-up Location
            </h1>
            <p className="mb-5">
              Optio, neque qui velit. Magni dolorum quidem ipsam eligendi,{" "}
              <br />
              totam, facilis laudantium cum accusamus ullam voluptatibus
            </p>
          </button>
          <button
            onClick={() => setImageLink(img3)}
            className="w-full text-start shadow-2xl p-3 cursor-pointer transition-all duration-100 rounded-lg border border-primary"
          >
            <h1 className="text-primary font-bold">3. Choose Payment Method</h1>
            <p className="mb-5">
              Facilis laudantium cum accusamus ullam voluptatibus commodi
              numquam, error, est. Ea, consequatur.
            </p>
          </button>
          <button
            onClick={() => setImageLink(img4)}
            className="w-full text-start shadow-2xl p-3 cursor-pointer transition-all duration-100 rounded-lg border border-primary"
          >
            <h1 className="text-primary font-bold">
              4. Driver On The Way To Pick-up
            </h1>
            <p className="mb-5">
              Magni dolorum quidem ipsam eligendi, totam, facilis laudantium cum
              accusamus ullam voluptatibus commodi numquam
            </p>
          </button>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/3">
          <img className="h-full animate-fade-in-right" src={imageLink} alt="" />
        </div>
      </div>
    </div>
  );
}
