import ApplicationStatusTable from "@/components/modules/Dashboard/DriverPage/ApplicationStatusTable";


export default function ApplicationStatus() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary underline">Your Application Status</h1>
      </div>
      <div className="mt-10 p-5 md:p-10">
        <ApplicationStatusTable/>
      </div>
    </div>
  )
}
