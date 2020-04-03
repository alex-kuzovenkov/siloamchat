import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/preloader/preloader';
import { compose } from 'redux';
import {initializeApp} from './redux/app_reducer'
import store from './redux/redux_store';
import { withSuspence } from './hoc/withSuspence';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileCotainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialized){
    return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={withSuspence(DialogsContainer)}/>
          <Route path='/profile'
            render={withSuspence(ProfileContainer)}/>
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/login'
            render={() => <Login />} />
        </div>
      </div>
    )
}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp}))(App)

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
  }

export default MainApp