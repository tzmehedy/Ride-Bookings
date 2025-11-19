import { baseApi } from "@/redux/baseApi";
import type { IResponse} from "@/types";
import type { IRidesInfo } from "@/types/rides.type";

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

        getAllRides: builder.query<IResponse<IRidesInfo>, unknown>({
            query: (params) => ({
                url: "/rides/me",
                method: "GET",
                params
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