import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IUser } from "@/types/user.type";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),

        login: builder.mutation({
            query: (loginInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: loginInfo
            }),
            invalidatesTags: ["User"]
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["User"]
        }),

        getUserInfo: builder.query<IResponse<IUser>, unknown>({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            providesTags: ["User"]
        }),

        updateUserInfo: builder.mutation({
            query: (updatedInfo) =>({
                url: "/user/update-user",
                method: "POST",
                data: updatedInfo
            }),
            invalidatesTags: ["User"]
        })


    })
})

export const { useRegisterMutation, useLoginMutation, useGetUserInfoQuery, useLogoutMutation , useUpdateUserInfoMutation} = authApi