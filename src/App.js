import "./App.css";
import { useFetch } from "./api/datos";
import { app } from "./strings";
import "./api/styles.css";


function App() {
  //recibo la información obtenida de la función y se envía la url del api (la variable del api esta almacenada como variable de entrno en el .evn por seguridad)
  const { data } = useFetch(`${process.env.REACT_APP_URL_API}`);

  //se almacena el mapeo de los datos del json en la variable cards
  const cards = data?.map((item) => (
    <>
      <div>
        <div className="imagenT"><img className="imagen" src={item.image} alt="logo" /></div>
        <div className="informacion">
          <p key={item.name}><span>{app.nameTitle}</span> {item.name}</p>
          <p key={item.gender}><span>Gender:</span> {item.gender}</p>
          <p key={item.height}><span>Height:</span> {item.height}</p>
          <p key={item.eye_color}><span>Eye color:</span> {item.eye_color}</p>
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
    </div>//mapeo la constante cards, pasando un id único para que tenga un identificador diferente en cada tarjeta 
  );
}

export default App;
