import { useFetchSuperHeros } from "../hooks/useFetchSuperHeros";

const RqSuperHeros = () => {
  
  const {isLoading, error, data} = useFetchSuperHeros();
  
  return (
    <div>
      <p>React Query SuperHeros</p>
      {
        isLoading && <li>Loading...</li>
      }
      {error && <li>Error: {error.message}</li>}
      <ul>
        {data?.map(hero => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default RqSuperHeros;