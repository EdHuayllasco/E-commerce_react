import axios from "axios";
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    useEffect(() => {

        fetchData();

    }, [url]);

    const fetchData = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const response =  await axios.get(url);
        
        setState({
            data: response.data,
            isLoading: false,
            hasError: null
        })
    }

    return {
        ...state
    };
    
}