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
    payment: string
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
