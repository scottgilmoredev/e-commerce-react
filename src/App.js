import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Redux
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

// Uncomment the line below to add more collections redcords to firestore.
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

// Styles
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

    /**
       * Add each of our collections to firestore, destructuring off the items and title fields.
       * 
       * NOTE: collections will need to be destructured off props,
       * and addCollectionAndDocuments will need to be imported 
       * in order to do this.
       */
      // addCollectionAndDocuments(
      //   'collections',
      //   collections.map(({ items, title }) => ({ items, title }))
      // );
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route exact path='/checkout' component={ CheckoutPage } />
          <Route
            exact
            path='/signin'
            render={() => currentUser
              ? <Redirect to='/' />
              : <SignInAndSignUp />}
            />
        </Switch>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

  // Uncomment the line below to add more collections redcords to firestore.
  // collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
