import { useFetchSuperHeros } from "../hooks/useFetchSuperHeros";

const RqSuperHeros = () => {
  
  const {isLoading, error, data} = useFetchSuperHeros();
  
  return (
    <div>
      <p>React Query SuperHeros</p>
      {
        isLoading && <p>Loading...</p>
      }
      {error && <p>Error: {error.message}</p>}
      <ul>
        {data?.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RqSuperHeros;