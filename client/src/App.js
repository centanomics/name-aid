import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import AuthState from './context/auth/AuthState';

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

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <AuthState>
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
              <Route exact path="/term" component={Terms} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </AuthState>
    </Provider>
  );
};

export default App;
