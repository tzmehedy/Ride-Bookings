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

