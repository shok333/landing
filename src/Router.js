import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from 'Components/Auth';
import MyAnswer from 'Components/MyAnswer';
import Answers from 'Components/Answers';
import NavBar from 'Components/NavBar'
import {previousSessionAuthAction} from 'Actions/authActions';

class Router extends Component {
    render () {
        const { userHasAuthenticated } = this.props;

        return (
            <BrowserRouter>
              <Switch>
                  <Route exact path="/auth" render={
                    () => userHasAuthenticated
                        ? <Redirect to="/" />
                        : <Auth/>
                  } />
                  <Route exact path="/answers" render={
                      () => userHasAuthenticated
                          ? <div>
                              <NavBar />
                              <Answers />
                          </div>
                          : <Redirect to="/auth" />
                  } />
                  <Route path="/" render={
                      () => userHasAuthenticated
                          ? <div>
                              <NavBar />
                              <MyAnswer />
                          </div>
                          : <Redirect to="/auth" />
                  } />
              </Switch>
            </BrowserRouter>
        );

        return null;
    }
}

function mapStateToProps(state) {
    return {
        ...state.auth,
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);