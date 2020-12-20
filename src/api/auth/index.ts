import {useCallback} from "react";
import axios from 'axios'


export const useHttp = () => {
    const request = useCallback(async (method = "GET",url = "", body = null, headers = {}) => {
        try {
            console.log(url, body)
            const response = await fetch('http://localhost:5000' + url, {method, body, headers})
            console.log(response)
        } catch (e) {
            console.log("my error: ", e)
        }
    }, [])

    return {request}
}