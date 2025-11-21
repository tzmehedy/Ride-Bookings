export interface IRequestedDrivers{
    _id: string
    userId: UserId
    rideId: string[]
    approval_status: string
    online_status: string
    vehicle_info: VehicleInfo
    availability: boolean
    createdAt: string
    updatedAt: string
}

export interface UserId {
    _id: string
    name: string
    email: string
    phone: string
}

export interface VehicleInfo {
    brand_name: string
    model: string
    vehicle_number: string
    _id: string
}

export interface IRequestedRides {
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
}

export interface User {
    _id: string
    name: string
    email: string
    phone: string
}



export interface IDriverRidesInfo {
    _id: string
    userId: UserId
    rideId: RideId[]
    approval_status: string
    online_status: string
    vehicle_info: VehicleInfo
    availability: boolean
    createdAt: string
    updatedAt: string
}

export interface UserId {
    _id: string
    name: string
    email: string
    phone: string
}

export interface RideId {
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
    driver: string
    payment: IPayment
}

export interface User {
    _id: string
    name: string
    email: string
    phone: string
}

export interface VehicleInfo {
    brand_name: string
    model: string
    vehicle_number: string
    _id: string
}

export interface IPayment{
    paymentStatus: "string"

}

export interface IDriverStats {
    todayRidesCount: TodayRidesCount
    sevenDaysAgoRideCount: SevenDaysAgoRideCount
    thirtyDaysAgoRideCount: ThirtyDaysAgoRideCount
    totalEarnings: TotalEarnings
}

export interface TodayRidesCount {
    _id: string
    totalEarning: number
    count: number
}

export interface SevenDaysAgoRideCount {
    _id: string
    totalEarning: number
    count: number
}

export interface ThirtyDaysAgoRideCount {
    _id: string
    totalEarning: number
    count: number
}

export interface TotalEarnings {
    _id: string
    totalEarnings: number
    totalCompletedRides: number
}

