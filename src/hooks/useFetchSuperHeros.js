import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = async() => {
    const response = await axios.get('http://localhost:3000/superheroes');
    return response.data;
}

export const useFetchSuperHeros = () => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeros,
    });
}