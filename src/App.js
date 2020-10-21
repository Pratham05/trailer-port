import React from 'react';
import Home from './pages/Home/Home';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Layout/Navbar/Navbar';

const  App = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={} />
        <Route path="/movies" component={} />
        <Route path="/tvshows" component={} />
        <Route exact path="/" component={} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
