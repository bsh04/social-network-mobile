export enum APIStatus {
    Initial = "Initial",
    Loading = "Loading",
    Success = "Success",
    Failure = "Failure",
}

export interface UserValues {
    email: string
    token?: string
    displayName?:string
    photoURL?:string
    phoneNumber?:string
}