import heroImgForFeature  from "../../../assets/images/HeroImgForFeatures.jpg"

export default function HeroForFeature() {
  return (
    <div
      style={{ backgroundImage: `url(${heroImgForFeature})` }}
      className="m-5 lg:m-0 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300 bg-muted-foreground bg-blend-multiply h-screen flex justify-center items-center"
    >
      <div className="text-white text-center">
        <p>
          Home <span className="text-primary font-bold"> &gt;</span> Features
        </p>
        <h1 className="text-5xl font-bold">
          Experience Convenience Our <br /> <span className="text-primary">Service</span> Offerings
        </h1>
      </div>
    </div>
  );
}
