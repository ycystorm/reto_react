import "./App.css";
import { useFetch } from "./api/datos";
import "./api/styles.css";

function App() {
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ci2Juan/api-client/main/users.json"
  );

  const cards = data?.map((item) => (
    <>
      <div>
        <img className="imagen" src={item.image}/>
        <div className="informacion">
        <p key={item.name}><span>name:</span> {item.name}</p>
        <p key={item.gender}><span>gender:</span> {item.gender}</p>
        <p key={item.height}><span>height:</span> {item.height}</p>
        <p key={item.eye_color}><span>eye_color:</span> {item.eye_color}</p>
        </div>
      </div>
    </>
  ));



  return (
    <div>
      <div className="titulo"><h1>User Data</h1></div>
      <div className="columnas">
      {cards?.map((card, id) => (
        <div key={id} className="tarjeta">
          {card}
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default App;
