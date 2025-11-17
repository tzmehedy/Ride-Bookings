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
            providesTags: ["Rides", "Drivers"]
        }),

        getPaymentUrl: builder.mutation({
            query: ({rideId}) =>({
                url: `/payment/init-payment/${rideId}`,
                method: "POST"
            })
        })

    })
})

export const {useRequestRideMutation, useGetAllRidesQuery, useGetPaymentUrlMutation} = ridesApi