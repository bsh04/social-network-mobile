export enum APIStatus {
    Initial = "Initial",
    Loading = "Loading",
    Success = "Success",
    Failure = "Failure",
}

export interface UserValues {
    id?: number
    email: string
    token?: string
    displayName?:string
    photoURL?:string
    phoneNumber?:string
}

export interface Persons {
    id: number
    name: string
    avatar?: number
}