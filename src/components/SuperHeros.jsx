import axios from "axios"
import { useEffect, useState } from "react"


const SuperHeros = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchSuperHeros = () => {
      axios.get("http://localhost:3000/superheroes1")
        .then(response => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.log("Error fetching superheroes:", error);
          setError(error);
          setLoading(false);
        });
    }

    fetchSuperHeros();
  }, []);

  return (
    <div> 
      <p>Traditional SuperHeros</p>
      {
        error && <p>Error: {error.message}</p>
      }
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(hero => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SuperHeros