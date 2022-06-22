import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/Item/ItemListContainer';
import CheckoutTable from './components/Checkout/CheckoutTable';
import Navbar from './components/NavBar/NavBar'
import Error from './components/pages/Error';
import Contact from './components/pages/Contact';
import Footer from './components/Footer/Footer';
import { CartProvider }  from './context/CartContext';
import './App.css';
import Send from './components/pages/Send';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#164749',
    },
    secondary: {
      main: '#508c8e',
    },
  },
});

function App() {
  return (
    <>
    <CartProvider>
      <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Send/>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />}/>
            <Route exact path='/home' element={<ItemListContainer />}/>
            <Route exact path='/cart' element={<CheckoutContainer />}/>
            <Route exact path='/category/:categoryName' element={<ItemListContainer />}/>
            <Route exact path='/contact' element={<Contact />}/>
            {/* <Route exact path='/products' element={}/> */}
            <Route exact path='/category/:categoryName/detail/:id' element={<ItemDetailContainer /> }/>
            <Route exact path='/detail/:id' element={<ItemDetailContainer /> }/>
            <Route exact path='*' element={<Error />}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      </ThemeProvider>
    </CartProvider>
    </>
  );
}

export default App;
