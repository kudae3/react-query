import axios from "axios"
import { useEffect, useState } from "react"


const SuperHeros = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchSuperHeros = () => {
      axios.get("http://localhost:3000/superheroes")
        .then(response => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching superheroes:", error);
        });
    }

    fetchSuperHeros();
  }, []);

  return (
    <div> 
      <p>Traditional SuperHeros</p>
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