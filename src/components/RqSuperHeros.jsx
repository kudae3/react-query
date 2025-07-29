import { useState } from "react";
import { useAddSuperHero, useFetchSuperHeros } from "../hooks/useFetchSuperHeros";



const RqSuperHeros = () => {

  const {isLoading, isFetching, error, data} = useFetchSuperHeros();
  const AddSuperHeroMutation = useAddSuperHero();
  
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  console.log({isFetching, isLoading});

  const handleSubmit = async (e) => {
    e.preventDefault();
    AddSuperHeroMutation.mutate({ name, alterEgo });
  }

  return (
    <div>
      <p>React Query SuperHeros</p>
      {error && <p>Error: {error.message}</p>}
      {/* <button onClick={refetch}>Refetch Heros</button> */}
      
      
      <form onSubmit={handleSubmit} method="post">
        
        <input onChange={(e) => {
          setName(e.target.value);
        }} value={name} type="text" name="name" placeholder="Hero Name" />

        <input onChange={(e) => {
          setAlterEgo(e.target.value);
        }} value={alterEgo} type="text" name="alterEgo" placeholder="Hero Alter Ego" />

        <button type="submit">Add Hero</button>
      </form>
      
      {
        (isLoading || isFetching) && <p>Loading...</p>
      }
      <ul>
        {!isLoading && !isFetching && data?.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RqSuperHeros;