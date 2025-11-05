import { baseApi } from "@/redux/baseApi";

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
        })
    })
})

export const {useRequestDriveMutation, useGetDriverInfoQuery} = driversApi