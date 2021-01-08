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

interface NewsContent {
    photos?: Array<string>
    videos?: Array<string>
    title?: string
    description: string
}

interface NewsComment {
    author: number | string
    time: string
    text: string
    likesCount: number
}

export interface News {
    id: number
    author: number | string
    time: string
    content: NewsContent
    likesCount: number
    likes?: Array<number>
    commentsCount: number
    comments?: Array<NewsComment>
    sharedCount: number
    shared?: Array<number>
}