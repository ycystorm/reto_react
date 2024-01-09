import { useState, useEffect} from "react" 


export function useFetch(url) {
    const [data, setData] = useState(null); 
    useEffect(() =>{
        fetch(url)
        .then((Response) => Response.json())
        .then((data) => setData(data))
        .finally(() => setLoading(false));
         
    }, []);
    
    return {data, loading};
}
