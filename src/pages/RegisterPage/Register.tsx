import { RegisterForm } from "@/components/modules/Authentication/RegisterForm";
import { Card, CardContent } from "@/components/ui/card";
import { FieldDescription } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import sideImgForRegister from "../../assets/images/RegistrationPageSideImg.jpg";
import Logo from "@/assets/icons/Logo/Logo";
export default function Register({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className="bg-muted">
      <div className=" flex min-h-svh flex-col items-center justify-center p-5 md:p-10 ">
        <div className="w-full max-w-sm md:max-w-4xl mt-3">
          <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-2 lg:p-5 shadow-md shadow-primary/60 border-2 border-primary rounded-xl">
              <CardContent className="grid md:grid-cols-2 p-0 gap-5">
                <div className="p-2 lg:p-5">
                  <div className="m-3">
                    <div className="flex gap-3 justify-center items-center  top-3 left-3">
                      <Link to="/" className="flex">
                        <Logo></Logo>
                      </Link>
                    </div>
                    <h1 className="text-primary text-xl font-bold text-center">
                      Welcome To Our Services
                    </h1>
                  </div>
                  <div className="bg-muted p-2  lg:p-5 border-2 border-primary rounded-lg  shadow-2xl">
                    <RegisterForm />
                  </div>
                </div>
                <div className="hidden md:flex justify-center items-center p-3 ">
                  <div className="p-2 border-2 border-primary rounded-xl">
                    <img
                      src={sideImgForRegister}
                      alt="Image"
                      className="inset-0 h-[300px] w-full overflow-hidden rounded-xl "
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </div>
        </div>
      </div>
    </div>
  );
}
