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
import { useDriverStatsInfoQuery } from "@/redux/features/drivers/driver.api"
import Loader from "@/components/layouts/Loader"

export const description = "A multiple bar chart"



const chartConfig = {
    total_Earning: {
        label: "total_Earning",
        color: "var(--chart-1)",
    },
    total_Rides: {
        label: "total_Rides",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export function Barchart() {
    const { data, isLoading } = useDriverStatsInfoQuery(null)

    const driverStatsInfo = data?.data

    if (isLoading) <Loader />

    const chartData = [
        { day: "1", total_Earning: driverStatsInfo?.todayRidesCount?.totalEarning || 0, total_Rides: driverStatsInfo?.todayRidesCount?.count  || 0},

        { day: "7", total_Earning: driverStatsInfo?.sevenDaysAgoRideCount?.totalEarning || 0, total_Rides: driverStatsInfo?.sevenDaysAgoRideCount?.count || 0 },

        { day: "30", total_Earning: driverStatsInfo?.thirtyDaysAgoRideCount?.totalEarning || 0, total_Rides: driverStatsInfo?.thirtyDaysAgoRideCount?.count || 0 }
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-primary font-bold text-lg">Earnings This Month</CardTitle>

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
                        <Bar dataKey="total_Earning" yAxisId="left" fill="#008166" radius={4} />
                        <Bar dataKey="total_Rides" yAxisId="right" fill="#009146" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
