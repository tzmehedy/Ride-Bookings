import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IAllRidesForAdmin } from "@/types/admin.types";
import type { IUser } from "@/types/user.type";

export const adminApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllUserInfo: builder.query<IResponse<IUser[]>, unknown>({
            query: (params) =>({
                url: "/user/all-users",
                method: "GET",
                params
            }),
            providesTags: ["Admin"]
        }),

        blockedUnBlockedAUser: builder.mutation({
            query: ({userId, blockStatus}) =>({
                url: `/user/block/${userId}`,
                method: "POST",
                data: {blockStatus}
            }),
            invalidatesTags: ["Admin"]
        }),

        getAllRides: builder.query<IResponse<IAllRidesForAdmin[]>, unknown>({
            query: (params) => ({
                url: `/rides/all-rides`,
                method: "GET",
                params
            })
        })
    })
})


export const {useGetAllUserInfoQuery, useBlockedUnBlockedAUserMutation, useGetAllRidesQuery} = adminApis