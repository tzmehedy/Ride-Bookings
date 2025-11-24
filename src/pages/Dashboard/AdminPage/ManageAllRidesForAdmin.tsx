import ManageAllRidesTable from "@/components/modules/Dashboard/AdminPage/ManageAllRidesTable";

export default function ManageAllRidesForAdmin() {
  return (
    <div>
      <div className="text-center">
        <h1 className=" text-primary text-3xl font-bold underline">Manage All Rides</h1>

      </div>
      <div className="my-10 p-2 md:p-10">
        <ManageAllRidesTable/>
      </div>
    </div>
  )
}
