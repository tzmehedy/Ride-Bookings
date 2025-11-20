import UpdateProfileForm from "@/components/modules/Dashboard/RidePage/UpdateProfileForm";


export default function UpdateProfile() {
  return (
    <div className="space-y-10">
        <div className="text-center">
            <h1 className="text-primary font-bold text-3xl underline">Update Your Profile</h1>
        </div>
        <div className="flex justify-center items-center">
            <UpdateProfileForm/>
        </div>
    </div>
  )
}
