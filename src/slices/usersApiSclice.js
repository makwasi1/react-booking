import { apiSclice } from "./apiSclice";

const USER_URL = "api/auth";

export const userApiSclice = apiSclice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/login`,
                method: "POST",
                body: data,
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/register`,
                method: "POST",
                body: data,
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = userApiSclice;