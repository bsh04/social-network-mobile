import {UserValues} from '../../types/interfaces'
export interface LoginFormProps {
    handleSubmit: ({login, password}: UserValues) => void,
    loading: boolean,
}