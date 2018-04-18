import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authRequestAction} from 'Actions/authActions';

class Auth extends Component {
    auth = (event) => {
        event.preventDefault();
        this.props.authRequest(event.target.dataset.type);
    };

    render () {
        return [
            <button key="vk" data-type="vk" onClick={this.auth}>Вконтакте</button>,
        ]
    };
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        authRequest: bindActionCreators(authRequestAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);