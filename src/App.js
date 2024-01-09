import "./App.css";
import { useFetch } from "./api/datos";
import "./api/styles.css";

function App() {
  const { data, loading } = useFetch(
    "https://raw.githubusercontent.com/ci2Juan/api-client/main/users.json"
  );

  const cards = data?.map((item) => (
    <>
      <div >
        <img className="imagen" src={item.image} />
        <p key={item.name}><span>name</span> {item.name}</p>
        <p key={item.gender}><span>gender</span> {item.gender}</p>
        <p key={item.heigt}><span>heigt</span> {item.heigt}</p>
        <p key={item.eye_color}><span>eye_color</span> {item.eye_color}</p>
      </div>
    </>
  ));

  return (
    <div className="columnas">
      {cards?.map((card, index) => (
        <div key={index} className="tarjeta">
          {card}
        </div>
      ))}
    </div>
  );
}

export default App;
