export interface IRide{
    _id: string
    user: User
    driver: Driver
    paymentMethod: string
    destination_address: string
    pickup_address: string
    distance: number
    price: number
    ride_status: string
    createdAt: string
    updatedAt: string
    payment: Payment
    __v: number
}

export interface User {
    _id: string
    name: string
    email: string
    phone: string
}
export interface Driver {
    _id: string
    userId: User,
    vehicle_info: {
        brand_name: string,
        model: string,
        vehicle_number: string
    }
}


export interface Payment {
    _id: string
    ride: string
    transitionId: string
    amount: number
    paymentStatus: string
    createdAt: string
    updatedAt: string
    __v: number
    paymentUrl: string
}

