import Loader from "@/components/layouts/Loader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useDriverStatsInfoQuery } from "@/redux/features/drivers/driver.api"
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function HeaderSection() {
    const {data, isLoading} = useDriverStatsInfoQuery(null)
    const driverStatsInfo = data?.data

    if(isLoading) <Loader/>

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <Card className="bg-[#5b9c08] ">
                  <CardHeader>
                      <CardTitle className="text-[#e7f6d1]">No Of Total Rides Completed</CardTitle>
                  </CardHeader>
                  <CardContent className="text-end">
                      <p className="text-7xl font-bold text-[#f5fce9]">{driverStatsInfo?.totalEarnings ? driverStatsInfo?.totalEarnings?.totalCompletedRides : 0}</p>
                  </CardContent>
              </Card>
              <Card className="bg-[#008166]">
                  <CardHeader>
                      <CardTitle className="text-[#e7f6d1]">Total Earning</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-end">
                      <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-center">{driverStatsInfo?.totalEarnings? driverStatsInfo?.totalEarnings?.totalEarnings: 0} <span className="text-lg"><FaBangladeshiTakaSign/></span></p>
                  </CardContent>
              </Card>
              <Card className="bg-[#009146]">
                  <CardHeader>
                      <CardTitle className="text-[#e7f6d1]">No Of Rides That You Completed Today</CardTitle>
                  </CardHeader>
                  <CardContent className="text-end">
                      <p className="text-7xl font-bold text-[#f5fce9]">{driverStatsInfo?.todayRidesCount? driverStatsInfo?.todayRidesCount?.count : 0}</p>
                  </CardContent>
              </Card>
        </div>

    </div>
  )
}
