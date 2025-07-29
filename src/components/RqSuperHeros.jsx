import { useFetchSuperHeros } from "../hooks/useFetchSuperHeros";

const RqSuperHeros = () => {

  const {isLoading, isFetching, error, data, refetch} = useFetchSuperHeros();
  console.log({isFetching, isLoading});
  

  return (
    <div>
      <p>React Query SuperHeros</p>
      {error && <p>Error: {error.message}</p>}
      <button onClick={refetch}>Refetch Heros</button>
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