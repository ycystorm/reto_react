import { useState, useEffect} from "react" 


export function useFetch(url) {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);

    if (data && data.length > 0) {
        console.log ("Mapea los datos del array")
      } else {
        console.log("El array está vacío o contiene elementos nulos") 
      }

    useEffect(() =>{
        setLoading(true);
        fetch(url)
        .then((Response) => Response.json())
        .then((data) => setData(data))
        .finally(() => setLoading(false)); 
    }, []);
    
    return {data, loading};
}
