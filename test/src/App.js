import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
    <ThemeProvider theme={theme}>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
          <Route exact path='/home' element={<ItemListContainer />}/>
          <Route exact path='/category/:name' element={<ItemListContainer />}/>
          <Route exact path='/contact' element={<Contact />}/>
          {/* <Route exact path='/products' element={}/> */}
          <Route exact path='/detail/:id' element={<ItemDetailContainer /> }/>
          <Route exact path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;
