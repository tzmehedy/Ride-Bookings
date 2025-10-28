import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
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

        logout: builder.mutation({
            query: () =>({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["User"]
        }),

        getUserInfo: builder.query({
            query: () =>({
                url: "/user/me",
                method: "GET"
            }),
            providesTags: ["User"]
        })


    })
})

export const {useRegisterMutation, useLoginMutation, useGetUserInfoQuery, useLogoutMutation} = authApi