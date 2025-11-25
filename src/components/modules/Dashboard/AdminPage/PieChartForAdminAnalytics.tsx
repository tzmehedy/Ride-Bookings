
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
   type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Loader from "@/components/layouts/Loader"
import { useGetStatsForAnalyticsQuery } from "@/redux/features/admin/admin.api"

export const description = "A pie chart with a label"



const chartConfig = {
 
    // Today_Rides: {
    //     label: "Today Rides",
    //     // color: "var(--chart-1)",
    // },
    // Seven_Days_Ago_Rides: {
    //     label: "Seven Days Ago Rides",
    //     // color: "var(--chart-2)",
    // },
    // Thirty_days_Ago_Rides: {
    //     label: "Thirty days Ago Rides",
    //     // color: "var(--chart-3)",
    // }
   
} satisfies ChartConfig

export function PieChartForAdminAnalytics() {
    const {data, isLoading} = useGetStatsForAnalyticsQuery(undefined)
        
          const adminStats = data?.data
    
        if (isLoading) return <Loader />

    const chartData = [
        { Rides: "Today Rides", count: adminStats?.total_revenue_in_oneDays?.count || 0, fill: "#9FB880" },

        { Rides: "Seven Days Ago Rides", count: adminStats?.total_revenue_in_sevenDays?.count || 0, fill: "#78A839" },

        { Rides: "Thirty days Ago Rides", count: adminStats?.total_revenue_in_thirtyDays?.count || 0, fill: "#559601" },
        
    ]
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-primary font-bold text-lg">Pie Chart For Percentage Of Earning</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="count" label nameKey="Rides" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
