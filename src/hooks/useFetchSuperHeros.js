import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeros = async() => {
    const response = await axios.get('http://localhost:3000/superheroes1');
    return response.data;
}

export const useFetchSuperHeros = () => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeros,
    });
}