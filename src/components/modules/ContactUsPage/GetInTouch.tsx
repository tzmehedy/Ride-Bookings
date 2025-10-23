import Building from "@/assets/icons/ContactUsIcons/Building";
import Phone from "@/assets/icons/ContactUsIcons/Phone";
import ContactUsForm from "./ContactUsForm";


export default function GetInTouch() {
  return (
    <div className="flex flex-col md:flex-row gap-10 my-20 p-5 lg:p-0 ">
      <div className="lg:w-1/2 space-y-5">
        <h1 className="text-primary text-4xl font-bold">Get In Touch With Us</h1>
        <p>
          Fugit sed quia consequuntur magni dolores eos qui ration nesciunt.
          Excepteur sint occaecat cupidatat non proident sunt in qui.
        </p>
        <div className="flex flex-col md:flex-row gap-10">
          <div className=" space-y-2">
            <div className="bg-primary/40 flex justify-center items-center w-10 h-10 rounded-full">
              <Building />
            </div>
            <h1 className="text-primary font-bold text-2xl">Our Office</h1>
            <p>Jl. Raya Sesetan No.210, Sesetan, <br /> Denpasar, Bali</p>
          </div>
          <div className="space-y-2">
            <div className="bg-primary/40 flex justify-center items-center w-10 h-10 rounded-full">
              <Phone />
            </div>
            <h1 className="text-primary font-bold text-2xl">Contact Info</h1>
            <p>+62 831-9929-86700</p>
            <p>contact@domain.com</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 bg-primary/40 rounded-xl">
        <ContactUsForm/>
      </div>
    </div>
  );
}
