import RequestDriverTable from "@/components/modules/Dashboard/AdminPage/RequestDriverTable";


export default function ApproveDriver() {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl underline text-primary">All Request For Drive</h1>
      </div>
      <div className="mt-10 p-2 md:p-10">
        <RequestDriverTable/>
      </div>
    </div>
  )
}
