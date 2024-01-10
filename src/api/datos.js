import { useState, useEffect} from "react" 


export function useFetch(url){
    const [data, setData] = useState(null); 
    useEffect(() =>{
	const fetchData = async () => {
         const api = await fetch(url)
	 const dataJson = await api.json()
	 setData(dataJson)
}       
fetchData(); 
    }, []);
    return {data};
}
