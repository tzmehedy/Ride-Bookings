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
                url: "/user/login",
                method: "POST",
                data: loginInfo
            }) 
        })


    })
})

export const {useRegisterMutation, useLoginMutation} = authApi