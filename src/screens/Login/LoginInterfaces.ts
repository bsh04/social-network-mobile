export interface LoginFields {
    login: string | undefined
    password: string | undefined
}

export interface LoginFormProps {
    handleSubmit: ({login, password}: LoginFields) => void,
    loading: boolean
}