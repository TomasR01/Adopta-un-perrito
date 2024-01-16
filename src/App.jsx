import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/footer';
import MyCard from './components/MyCard';
import './App.css';

function App() {
  return (
    <>
    <Header titulo="Adopta un perrito"/>
      <main className="catalogo">
      <MyCard
      imagen="https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      titulo="Shiro"
      descripcion="Shiro es un cachorro lleno de energia y listo para jugar.¡Dale el hogar amoroso que se merece!."
      colorTag="success"
      textoTag="Shiba inu"
      />
       <MyCard
      imagen="https://images.pexels.com/photos/162149/dog-black-labrador-black-dog-162149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      titulo="Kuro"
      descripcion="Es juguetón, amigable y se lleva bien con niños y otros animales.¡Haz de Kuro parte de tu familia hoy mismo!."
      colorTag="primary"
      textoTag="Labrador Retriver"
      />
       <MyCard
      imagen="https://images.pexels.com/photos/103540/pexels-photo-103540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      titulo="Viejo"
      descripcion="Como lo dice su nombre, Viejo es un perro adulto que solo necesita cariño, y un espacio para dormir mucho."
      colorTag="danger"
      textoTag="Gran danes"
      />
       <MyCard
      imagen="https://images.pexels.com/photos/604532/pexels-photo-604532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      titulo="Chun-li"
      descripcion="Esta hermosa perrita de 1 año y medio, necesita un hogar cariñoso y amoroso, y mucha comida!!."
      colorTag="warning"
      textoTag="Akita"
      />
      </main>
      <Footer />
    </>
  );
}

export default App;
