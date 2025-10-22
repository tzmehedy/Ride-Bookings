import aboutHeroBgImage from "../../../assets/images/aboutPageHeroSectionBG.jpg"

export default function HeroForAboutPage() {
  return (
    <div
      style={{ backgroundImage: `url(${aboutHeroBgImage})` }}
      className="m-5 lg:m-0 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300 bg-muted-foreground bg-blend-multiply h-screen flex justify-center items-center"
    >
      <div className="text-white text-center">
        <p>
          Home <span className="text-primary font-bold"> &gt;</span> About
        </p>
        <h1 className="text-5xl font-bold">
          Our Story of <br />
          Service and <span className="text-primary">Excellence</span>
        </h1>
      </div>
    </div>
  );
}
