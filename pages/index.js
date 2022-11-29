import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Layout from '../components/layout';
import Auth from './auth';

export default function HomePage() {

  return (     
  <BrowserRouter>
    <Container maxWidth="lg">
      <Layout />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter> 
  );
}