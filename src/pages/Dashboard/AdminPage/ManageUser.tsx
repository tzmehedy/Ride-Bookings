import AllUserInfoTable from "@/components/modules/Dashboard/AdminPage/AllUserInfoTable";


export default function ManageUser() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-primary text-3xl font-bold underline">All Users Info</h1>
      </div>

      <div className="mt-10 p-2 md:p-10">
        <AllUserInfoTable/>
      </div>
    </div>
  )
}
