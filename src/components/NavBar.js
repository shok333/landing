import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutAction} from 'Actions/authActions';
import {bindActionCreators} from 'redux';

class NavBar extends Component {
    logoutHandler = (event) => {
        event.preventDefault();
        this.props.logout();
    };

    render () {
        return (
            <nav className="navigation">
              <ul>
                <li><NavLink to="/">Мой ответ</NavLink></li>
                <li><NavLink to="/answers">Ответы</NavLink></li>
                <li><a href="" onClick={this.logoutHandler}>Выйти</a></li>
              </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(logoutAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);