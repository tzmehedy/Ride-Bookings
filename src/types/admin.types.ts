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
