import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';
import imagen from './components/images/fondo.png'
import Itemlistcontainer from './components/Itemlistcontainer';

function App() {
  return (
    <div className='container-fluid fondo_rosa' >
     <NavBar/>
     <div className="text-center">
          <img src={imagen} alt="Luna Lingerie" className="img-fluid"/>   
      </div> 
     <ItemDetailContainer/>
     <Itemlistcontainer props="hola"/>
    </div>
  );
}

export default App;
