export interface RegisterFields {
    firstName: string
    secondName: string
    email: string
    password: string
}

export interface RegisterFormProps {
    loading: boolean
    handleSubmit: ({...props}: RegisterFields) => void
}