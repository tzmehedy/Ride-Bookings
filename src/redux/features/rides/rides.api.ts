import { baseApi } from "@/redux/baseApi";
import type { IResponse, IRide } from "@/types";

export const ridesApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        requestRide: builder.mutation({
            query: (rideRequestInfo) =>({
                url: "/rides/request",
                method:"POST",
                data: rideRequestInfo
            }),
            invalidatesTags: ["Rides"]
        }),
        getAllRides: builder.query<IResponse<IRide[]>, null>({
            query: () => ({
                url: "/rides/me",
                method: "GET"
            }),
            providesTags: ["Rides"]
        })
    })
})

export const {useRequestRideMutation, useGetAllRidesQuery} = ridesApi