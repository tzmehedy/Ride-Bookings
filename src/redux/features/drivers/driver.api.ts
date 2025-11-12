import { baseApi } from "@/redux/baseApi";
import type { IRequestedDrivers, IResponse } from "@/types";


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
            query: ({id, status}) => ({
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
        })

        
    })
})

export const {useRequestDriveMutation,useApproveDriverMutation, useGetDriverInfoQuery, useRequestedDriversQuery} = driversApi