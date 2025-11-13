import { MyRideTable } from "@/components/modules/Dashboard/RidePage/MyRideTable";

export default function MyRideHistory() {
  return (
    <div className="space-y-10">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-primary underline">Your Rides Info</h1>
        </div>

      <div className="mt-10 p-2 md:p-10">
            <MyRideTable/>
        </div>
    </div>
  )
}
