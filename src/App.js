import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Firebase
import { auth } from './firebase/firebase.utils';

// Components
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Styles
import './App.css';
import './pages/homepage/homepage.styles.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  };
}

export default App;
