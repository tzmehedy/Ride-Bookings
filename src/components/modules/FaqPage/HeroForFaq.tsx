import faqHeroImg from "../../../assets/images/faqHeroImg.jpg"

export default function HeroForFaq() {
  return (
    <div
      style={{ backgroundImage: `url(${faqHeroImg})` }}
      className="m-5 lg:m-0 rounded-xl bg-cover bg-no-repeat max-w-screen transition-all duration-300 bg-muted-foreground bg-blend-multiply h-screen flex justify-center items-center"
    >
      <div className="text-white text-center">
        <p>
          Home <span className="text-primary font-bold"> &gt;</span> FAQ
        </p>
        <h1 className="text-5xl font-bold">
          Answers to <span className="text-primary">Common Questions</span>{" "}
          about <br /> Our Services and Policies
        </h1>
      </div>
    </div>
  );
}
