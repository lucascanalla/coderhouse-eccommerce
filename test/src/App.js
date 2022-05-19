import './App.css';
import ItemListContainer from './components/Card/ItemListContainer';
import Navbar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="title">Ecommerce</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;
