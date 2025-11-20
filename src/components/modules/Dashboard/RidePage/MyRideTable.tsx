import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetAllRidesQuery, useGetPaymentUrlMutation } from "@/redux/features/rides/rides.api"
import { useState, useEffect } from "react"
import RideDetailsModal from "./RideDetailsModal"
import type { IRide } from "@/types"
import { RideTimelineItems } from "@/constants/ride"
import { toast } from "sonner"
import Loader from "@/components/layouts/Loader"
import { cn } from "@/lib/utils"
import SearchAndFilterBar from "./SearchAndFilterBar"
import { useSearchParams } from "react-router"


export function MyRideTable() {
    const totalItemsPerPage = 5
    const [currentPage, setCurrentPage] = useState(1)

    const [searchParams] = useSearchParams()

   
    const searchTerm = searchParams.get("searchTerm") 
    const sortByDate = searchParams.get("sortByDate")
    const rideStatus = searchParams.get("ride-status")
    

    const query = { 
        size: totalItemsPerPage, 
        page: currentPage, 
        searchTerm,
        sortByDate,
        rideStatus
    }


    const { data, isLoading: ridesInfoLoading } = useGetAllRidesQuery(query)

    const [getPaymentUrl] = useGetPaymentUrlMutation()



    const ridesInfo = data?.data?.allRides
    const totalNumberOfItems = data?.data?.meta?.numberOfTotalRides || 0


    const [open, setOpen] = useState(false)
    const [selectedRideInfo, setSelectedRideInfo] = useState<IRide | null>(null)
    const [defaultValueIndex, setDefaultValueIndex] = useState(0)

    const [paginateArray, setPaginateArray] = useState<number[]>([])




    useEffect(() => {


        const totalNumberOfPages = Math.ceil(totalNumberOfItems / totalItemsPerPage)

        if (totalNumberOfPages > 0) {
            const paginationElementArray = [...Array(totalNumberOfPages).keys()]
            setPaginateArray(paginationElementArray)
        } else {
            setPaginateArray([])
        }


    }, [ridesInfo, totalNumberOfItems])


    if (ridesInfoLoading) return <Loader />

    const handleShowDetails = (rideInfo: IRide) => {
        RideTimelineItems.map((item) => {
            if (item.title === rideInfo.ride_status) {
                setDefaultValueIndex(item.id)
            }
        })
        setSelectedRideInfo(rideInfo)
        setOpen(true)
    }


    const handelPayment = async (rideId: string) => {
        const toastId = toast.loading("Processing")
        try {
            const result = await getPaymentUrl({ rideId }).unwrap()
            
            if (result.data.paymentURL) {
                window.open(result.data.paymentURL)
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log(error)
            toast.error(error?.data.message, { id: toastId })

        }
    }

    const handelPrevious = () => {
        setCurrentPage(currentPage - 1)
    }
    const handelNext = () => {
        setCurrentPage(currentPage + 1)
    }


    return (
        <>
            <SearchAndFilterBar />

            <Table className="">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">#</TableHead>
                        <TableHead className="w-[100px]">Pick-Up</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Distance</TableHead>
                        <TableHead className="">Price</TableHead>
                        <TableHead className="">Ride Status</TableHead>
                        <TableHead className="">Payment Method</TableHead>
                        <TableHead className="">Payment Status</TableHead>
                        <TableHead className="">Ride Date</TableHead>
                        <TableHead className="text-center">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ridesInfo?.map((rideInfo, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell className="">{rideInfo.pickup_address}</TableCell>
                            <TableCell>{rideInfo.destination_address}</TableCell>
                            <TableCell>{rideInfo.distance} km</TableCell>
                            <TableCell className="">{rideInfo.price} Tk.</TableCell>
                            <TableCell className={cn({
                                "text-green-500 font-bold": rideInfo.ride_status === "Accepted",
                                "text-cyan-500 font-bold": rideInfo.ride_status === "Picked_Up",
                                "text-blue-800 font-bold": rideInfo.ride_status === "In_Transit",
                                "text-green-600 font-bold": rideInfo.ride_status === "Completed",
                                "text-red-600 font-bold": rideInfo.ride_status === "Canceled",
                            })}>{rideInfo.ride_status}</TableCell>
                            <TableCell className="">{rideInfo.paymentMethod}</TableCell>
                            <TableCell className="">{rideInfo?.payment ? rideInfo?.payment.paymentStatus : "Not Accept Ride"}</TableCell>
                            <TableCell className="">{rideInfo?.createdAt ? new Date(rideInfo.createdAt).toLocaleString().split(",")[0] : ""}</TableCell>
                            <TableCell className="space-x-2">
                                <Button onClick={() => handleShowDetails(rideInfo)} className="cursor-pointer">See Details</Button>


                                <Button onClick={() => handelPayment(rideInfo._id)} disabled={rideInfo.paymentMethod === "Cash" || rideInfo.ride_status !== "Completed"} variant="outline" className="cursor-pointer border border-primary">💵Pay</Button>
                            </TableCell>

                        </TableRow>
                    ))}

                    {
                        ridesInfo?.length === 0 && <TableRow>
                            <TableCell className="text-center text-muted-foreground" colSpan={10} >No Data found.</TableCell>
                        </TableRow>
                    }
                </TableBody>
                <RideDetailsModal defaultValueIndex={defaultValueIndex} rideData={selectedRideInfo} open={open} setOpen={setOpen} />
            </Table>

            <div className="flex justify-center items-center gap-3">
                <Button disabled={currentPage === 1} onClick={handelPrevious} className="" variant="outline">Previous</Button>
                {
                    paginateArray.length > 0 && paginateArray.map((item, index) => <Button key={index} onClick={() => setCurrentPage(item + 1)} className={cn("font-bold", {
                        "border border-primary": item + 1 === currentPage
                    })} variant="outline">{item + 1}</Button>
                    )
                }
                <Button className="" disabled={currentPage === paginateArray.length} onClick={handelNext} variant="outline">Next</Button>
            </div>
        </>

    )
}
