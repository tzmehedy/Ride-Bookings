export interface IUser {
    _id: string
    name: string
    email: string
    password: string
    auths: Auth[]
    phone: string
    isBlocked: boolean
    isVerified: boolean
    role: string
    createdAt: string
    updatedAt: string
    __v: number
}

export interface Auth {
    providerId: string
    providerName: string
}


export interface IAllRidesForAdmin {
    _id: string
    user: User
    paymentMethod: string
    destination_address: string
    pickup_address: string
    distance: number
    price: number
    ride_status: string
    createdAt: string
    updatedAt: string
    __v: number
    driver: Driver
    payment: Payment
}


export interface User{
    name: string,
    email: string,
    phone: string
}

export interface Driver {
    _id: string
    userId: User
    rideId: string[]
    approval_status: string
    online_status: string
    vehicle_info: VehicleInfo
    availability: boolean
    createdAt: string
    updatedAt: string
}

export interface Payment{
    transitionId: string,
    paymentStatus: string
}

export interface VehicleInfo {
    brand_name: string
    model: string
    vehicle_number: string
    _id: string
}

export interface IAdminStats {
    total_ride: number
    total_completed_ride: number
    total_cancel_ride: number
    total_approve_driver: number
    total_user: number
    total_revenue: TotalRevenue
    total_revenue_in_thirtyDays: TotalRevenueInThirtyDays
    total_revenue_in_sevenDays: TotalRevenueInSevenDays
    total_revenue_in_oneDays: TotalRevenueInOneDays
}

export interface TotalRevenue {
    _id: string
    total_revenue: number
}

export interface TotalRevenueInThirtyDays {
    _id: string
    thirty_day_revenue: number
    count: number
}

export interface TotalRevenueInSevenDays {
    _id: string
    seven_day_revenue: number
    count: number
}

export interface TotalRevenueInOneDays {
    _id: string
    one_day_revenue: number
    count: number
}


