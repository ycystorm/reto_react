import { useState, useEffect } from "react";

//función que me obtendrá la url para consumir los recursos del api
export function useFetch(url) {
  const [data, setData] = useState(null); //coloco la variable que me contendrá la información traída del json
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(url); //se almacena la url en la variable api con el método fetch
      const dataJson = await api.json(); //en la variable dataJson almaceno el resultado de convertir la variable api en un json
      setData(dataJson); //en setData se almacena la variable dataJson
    };
    fetchData(); // el método tiene que ejecutarse para poder retornar data
  }, [url]);
  return { data };
}
