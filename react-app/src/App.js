import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';


function App() {
  return (
    <Container className='d-fex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
      <div className='w-100' style={{maxHeight:'400px'}}>
        <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/products' component={Product} />
              {/* <Route path='/login' component={Login} /> */}
              <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
