import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeros = async() => {
    const response = await axios.get('http://localhost:3000/superheroes');
    return response.data;
}

export const useFetchSuperHeros = () => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeros,
        // enabled: false
    });
}

export const addSuperHero = async({ name, alterEgo }) => {
    const response = await axios.post('http://localhost:3000/superheroes', {
        name,
        alterEgo
    });
    return response.data;
}

export const useAddSuperHero = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: addSuperHero,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['super-heroes'] });
        }
    })
}