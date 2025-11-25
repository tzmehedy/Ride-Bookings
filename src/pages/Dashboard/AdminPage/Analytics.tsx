import AnalyticsHeadersCard from "@/components/modules/Dashboard/AdminPage/AnalyticsHeadersCard"
import { BarchartForAdminDashboard } from "@/components/modules/Dashboard/AdminPage/BarchartForAdminDashboard"
import { PieChartForAdminAnalytics } from "@/components/modules/Dashboard/AdminPage/PieChartForAdminAnalytics"


export default function Analytics() {
  

  

  return (
    <div className="space-y-10">
      <AnalyticsHeadersCard/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <BarchartForAdminDashboard />
        <PieChartForAdminAnalytics/>
      </div>
    </div>
  )
}
