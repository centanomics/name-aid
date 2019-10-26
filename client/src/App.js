import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import setAuthToken from './utils/setAuthToken';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import UserHome from './components/pages/UserHome';
import Collections from './components/pages/Collections';
import Terms from './components/pages/Terms';
import NotFound from './components/pages/NotFound';
import SharedCollections from './components/pages/SharedCollections';
import Shared from './components/pages/Shared';
import Forgot from './components/pages/Forgot';
import Reset from './components/pages/Reset';
import Contact from './components/pages/Contact';

import './App.css';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/collections" component={Collections} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/auth/reset_password" component={Reset} />
            <Route exact path="/term/:id" component={Terms} />
            <Route exact path="/shared" component={SharedCollections} />
            <Route exact path="/shared/:id" component={Shared} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
