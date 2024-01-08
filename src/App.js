import "./App.css";
import { useFetch } from "./api/datos";

function App() {
  const { data, loading } = useFetch (
    "https://raw.githubusercontent.com/ci2Juan/api-client/main/users.json"
  );

return(
<div>{loading && <div>{data?.map((datos) => (
  <h1 key={datos.name}>{datos.name}</h1>
))}</div>}</div>
);

}

export default App;
