import DriverRequestForm from "@/components/modules/Dashboard/DriverPage/DriverRequestForm";


export default function DriverApplication() {
  return (
    <div className="space-y-5">
        <div className="text-center">
            <h1 className="text-3xl font-bold underline text-primary">Application Become Driver</h1>
        </div>
        <div className="flex justify-center ">
              <div className="p-2 md:p-5 lg:p-10 bg-muted-foreground/10 space-y-3 rounded-xl shadow-xl">
                    <h1 className="text-primary">Please fill up your vehicle information to request a drive. </h1>
                  <DriverRequestForm />
            </div>
        </div>
    </div>
  )
}
