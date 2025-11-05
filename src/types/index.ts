import type { ComponentType } from "react"
export type { IRide } from "./rides.type.ts"
export type { IRequestedDrivers } from "./drivers.type.ts"

export interface ISidebarItems{
    title: string,
    items: {
        title: string,
        url: string,
        component: ComponentType
    }[]
}

export type TRole = "ADMIN" | "DRIVER" |"RIDER" 

export interface IResponse<T>{
    success: boolean,
    message: string,
    statusCode: number,
    data?:T
}