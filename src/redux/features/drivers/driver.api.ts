import { baseApi } from "@/redux/baseApi";
import type { IRequestedDrivers, IResponse } from "@/types";
import type { IDriverRidesInfo, IRequestedRides } from "@/types/drivers.type";


export const driversApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestDrive: builder.mutation({
            query: (requestInfo) => ({
                url: "/drivers/register",
                method: "POST",
                data: requestInfo
            }),
            invalidatesTags: ["Drivers"]
        }),

        getDriverInfo: builder.query({
            query: () => ({
                url: "/drivers/me",
                method: "GET"
            }),
            providesTags: ["Drivers"]
        }),

        approveDriver: builder.mutation({
            query: ({ id, status }) => ({
                url: `/drivers/approve/${id}?status=${status}`,
                method: "POST",
            }),
            invalidatesTags: ["Drivers"]
        }),

        requestedDrivers: builder.query<IResponse<IRequestedDrivers[]>, null>({
            query: () => ({
                url: "/drivers/requested-driver",
                method: "GET"
            })
        }),

        getRequestedRides: builder.query<IResponse<IRequestedRides[]>,null>({
            query: () => ({
                url: "/rides/requested-rides",
                method: "GET"
            }),
            providesTags: ["Rides"]
        }),

        acceptRide: builder.mutation({
            query: (rideId: string) =>({
                url: `/drivers/accept-ride/${rideId}`,
                method: "POST"
            })
        }),

        getMyAllRides: builder.query<IResponse<IDriverRidesInfo>, null>({
            query: () =>({
                url: "/drivers/me",
                method: "GET"
            }),
            providesTags: ["Rides"]
        }),

        updateRidesStatus: builder.mutation({
            query: ({rideId, status}) =>({
                url: `/rides/update-status/${rideId}`,
                method: "POST",
                data: status
            }),
            invalidatesTags: ["Rides"]
        })


    })
})

export const {
    useRequestDriveMutation,
    useApproveDriverMutation,
    useGetDriverInfoQuery,
    useRequestedDriversQuery,
    useGetRequestedRidesQuery,
    useAcceptRideMutation,
    useGetMyAllRidesQuery,
    useUpdateRidesStatusMutation
} = driversApi