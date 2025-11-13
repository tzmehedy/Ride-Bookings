import ManageAllRidesTable from "@/components/modules/Dashboard/DriverPage/ManageAllRidesTable";


export default function ManageAllRides() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-primary text-3xl font-bold underline">Manage Your All Rides From Here</h1>
            </div>
            <div className="mt-10 p-2 md:p-10">
                <ManageAllRidesTable/>
            </div>
        </div>
    )
}
