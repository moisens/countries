import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/navigation/Nav';
import Countries from './components/header/Header';
import Details from './components/details/Details'

function App() {
  

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Countries />
          </Route>
          <Route path='/details/:name'>
            <Details />
          </Route>
        </Switch>
      </Router>
      
      
      
    </>
  )
}

export default App
