//import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
function App() {
  return (
    <Router>
    <Route path='/' component={Header}/>
     <main>
     <Container>
     <h1>E-Shop</h1>
     <Route path='/' component={HomeScreen} exact/>
     <Route path='/product/:id' component={ProductScreen} />
     </Container>
    
     </main>
     <Footer/>
     </Router>
  );
}

export default App;
