export enum APIStatus {
    Initial = "Initial",
    Loading = "Loading",
    Success = "Success",
    Failure = "Failure",
}

export interface UserValues {
    login?: string
    password?: string
}