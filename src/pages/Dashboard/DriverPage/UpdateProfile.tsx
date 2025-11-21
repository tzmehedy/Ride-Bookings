import UpdateProfileFormForDriver from "@/components/modules/Dashboard/DriverPage/UpdateProfileFormForDriver";

export default function UpdateProfile() {
  return (
    <div>
        <div className="text-center">
            <h1 className="text-3xl font-bold text-primary underline">Update Your Profile Info</h1>
        </div>
        <div className="flex justify-center items-center my-10">
            <UpdateProfileFormForDriver/>
        </div>

    </div>
  )
}
