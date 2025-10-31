import { MyRideTable } from "@/components/modules/RidePage/MyRideTable";

export default function MyRide() {
  return (
    <div className="space-y-10">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-primary underline">Your Rides Info</h1>
        </div>

        <div className="p-10">
            <MyRideTable/>
        </div>
    </div>
  )
}
