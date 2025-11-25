import Loader from "@/components/layouts/Loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetStatsForAnalyticsQuery } from "@/redux/features/admin/admin.api";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


export default function AnalyticsHeadersCard() {
    const {data, isLoading} = useGetStatsForAnalyticsQuery(undefined)
    
      const adminStats = data?.data

    if (isLoading) return <Loader />
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card className="bg-[#5b9c08] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_revenue.total_revenue} <span className="text-lg"><FaBangladeshiTakaSign/></span></p>
              </CardContent>
          </Card>

          <Card className="bg-[#009146] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total Rides</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_ride}</p>
              </CardContent>
          </Card>
          <Card className="bg-[#adad28] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total Completed Rides</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_completed_ride}</p>
              </CardContent>
          </Card>
          <Card className="bg-[#e9995c] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total Cancel Rides</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_cancel_ride}</p>
              </CardContent>
          </Card>
          <Card className="bg-[#008166] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total User</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_user}</p>
              </CardContent>
          </Card>
          <Card className="bg-[#467f8d] ">
              <CardHeader>
                  <CardTitle className="text-[#e7f6d1]">Total Approve Driver</CardTitle>
              </CardHeader>
              <CardContent className="text-end">
                  <p className="text-7xl font-bold text-[#f5fce9] flex items-end justify-end">{adminStats?.total_approve_driver}</p>
              </CardContent>
          </Card>

    </div>
  )
}
