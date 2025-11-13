import ShowRequestedRidesTable from "@/components/modules/Dashboard/DriverPage/ShowRequestedRidesTable";

export default function AllRideRequests() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-primary text-3xl font-bold underline">All Requested Rides</h1>
      </div>
      <div className="mt-10 p-2 md:p-10">
        <ShowRequestedRidesTable/>
      </div>
    </div>
  )
}
