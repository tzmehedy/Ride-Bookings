import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
import { useGetStatsForAnalyticsQuery } from "@/redux/features/admin/admin.api"

export const description = "A multiple bar chart"



const chartConfig = {
    total_revenue: {
        label: "total_revenue",
        color: "var(--chart-1)",
    },
    total_Rides: {
        label: "total_Rides",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function BarchartForAdminDashboard() {
    const {data} = useGetStatsForAnalyticsQuery(undefined)
        const adminStats = data?.data
    


    const chartData = [
        { day: "1", total_revenue: adminStats?.total_revenue_in_oneDays.one_day_revenue || 0, total_Rides: adminStats?.total_revenue_in_oneDays?.count  || 0},

        { day: "7", total_revenue: adminStats?.total_revenue_in_sevenDays?.seven_day_revenue || 0, total_Rides: adminStats?.total_revenue_in_sevenDays?.count || 0 },

        { day: "30", total_revenue: adminStats?.total_revenue_in_thirtyDays?.thirty_day_revenue || 0, total_Rides: adminStats?.total_revenue_in_thirtyDays?.count || 0 }
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary font-bold text-lg">Revenue This Month</CardTitle>

            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            yAxisId="left"
                            domain={[0, 'dataMax + 500']}
                        />

                        <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        domain={[0, 'dataMax + 10']} 

                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="total_revenue" yAxisId="left" fill="#008166" radius={4} />
                        <Bar dataKey="total_Rides" yAxisId="right" fill="#009146" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
