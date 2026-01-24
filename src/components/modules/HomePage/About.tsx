import aboutImg from "../../../assets/images/AboutImage.png";
export default function About() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-2 md:p-0">
      <div className="text-center space-y-3">
        <h1 className="text-primary text-3xl font-bold">
          Challenging injustice to make the world a fairer <br /> place for one
          billion people
        </h1>
        <p className="text-muted-foreground">
          We challenge injustice and strive to create positive change in every
          community. <br />
          through our unwavering commitment, we aim to build a more inclusive
          and <br />
          equitable world for all.
        </p>
      </div>

      <div className="">
        <img className="h-96" src={aboutImg}/>
      </div>
    </div>
  );
}
