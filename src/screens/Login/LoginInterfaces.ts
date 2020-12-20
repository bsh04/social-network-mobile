export interface LoginFormParams {
    email: string
    password: string
}

export interface LoginFormProps {
    handleSubmit: ({email, password}: LoginFormParams) => void,
    loading: boolean,
}