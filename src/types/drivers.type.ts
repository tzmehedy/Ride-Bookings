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