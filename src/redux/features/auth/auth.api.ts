import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        register : builder.mutation({
            query: (userInfo) =>({
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
            }) 
        }),

        getUserInfo: builder.query({
            query: () =>({
                url: "/user/me",
                method: "GET"
            })
        })


    })
})

export const {useRegisterMutation, useLoginMutation, useGetUserInfoQuery} = authApi