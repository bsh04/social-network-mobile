export interface RegisterFields {
    firstName: string | undefined
    secondName: string | undefined
    login: string | undefined
    password: string | undefined
}

export interface RegisterFormProps {
    loading: boolean
    handleSubmit: ({...props}: RegisterFields) => void
}