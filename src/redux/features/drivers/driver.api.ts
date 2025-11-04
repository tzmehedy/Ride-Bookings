import { baseApi } from "@/redux/baseApi";

export const driversApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        requestDrive: builder.mutation({
            query: (requestInfo) => ({
                url: "/drivers/register",
                method: "POST",
                data: requestInfo
            })
        })
    })
})

export const {useRequestDriveMutation} = driversApi