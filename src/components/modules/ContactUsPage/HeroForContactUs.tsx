
import heroImgForContactUs from "../../../assets/images/HeroImgForContactUS.jpg"

export default function HeroForContactUs() {
  return (
    <div
      style={{ backgroundImage: `url(${heroImgForContactUs})` }}
      className="m-5 lg:m-0 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300 bg-muted-foreground bg-blend-multiply h-screen flex justify-center items-center"
    >
      <div className="text-white text-center">
        <p>
          Home <span className="text-primary font-bold"> &gt;</span> Contact
        </p>
        <h1 className="text-5xl font-bold">
          Connect with Us for Any <br /> <span className="text-primary">Questions or Concerns</span>
        </h1>
      </div>
    </div>
  );
}
