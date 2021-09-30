import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Product from './pages/Product';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {AuthProvider} from './context/AuthContext';
import PrivateRoute from './pages/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Container className='d-fex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
      <div className='w-100' style={{maxHeight:'400px'}}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Login} />
              <PrivateRoute path='/products' component={Product} />
              <PrivateRoute path='/cart' component={Cart} />
              <Route path='/forgotpassword' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
