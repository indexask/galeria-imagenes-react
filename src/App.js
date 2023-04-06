import "./App.css";
import Cardcomponents from "./componentes/Cards";
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"

function App() {
  return (
    <div className="container contenedor ">
      <div className="header">
      <Header text='Galeria de imagene con React' />
      </div>

      <div className="tarjeta">

      <Cardcomponents
        link="https://www.petdarling.com/wp-content/uploads/2021/02/tigre-blanco.jpg"
        titulo="tigre blanco"
        descripcion="Feroz"
      />
      

      <Cardcomponents
        link="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
        titulo="Leon"
        descripcion="Carnivoro"
      />

      <Cardcomponents
      className= 'card1'
        link='https://phantom-elmundo.unidadeditorial.es/a0fa4eb6bd8150f072a5fbd5601e79c9/crop/0x0/3062x2041/resize/550/f/webp/assets/multimedia/imagenes/2022/02/18/16452027893540.jpg'
        titulo="Cocodrilo"
        descripcion="Hostil"
      />
      </div>
      <div className="footer">
      <Footer text='Todos los Derechos Reservados' />
      </div>

    </div>
  );
}

export default App;
