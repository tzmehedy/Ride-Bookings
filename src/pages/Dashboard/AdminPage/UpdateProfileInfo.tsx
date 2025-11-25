import UpdateProfileFormForAdmin from "@/components/modules/Dashboard/AdminPage/UpdateProfileFormForAdmin";


export default function UpdateProfileInfo() {
  return (
    <div>
        <div className="text-center">
            <h1 className="text-primary text-3xl font-bold underline">Update Your Profile Information</h1>
        </div>

          <div className="flex justify-center items-center mt-10">
            <UpdateProfileFormForAdmin/>
        </div>
    </div>
  )
}
