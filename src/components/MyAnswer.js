import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';
import {saveMyAnswerAction, removeMyAnswerAction} from 'Actions/answersActions';
import {getIndexUsingId} from 'Root/tools';
import PopUp from 'Components/PopUp';

class MyAnswer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            userName: '',
            withMe: 0,
            decisionCome: 'нужно выбрать',
        };
    }
    sendAnswer = (event) => {
        event.preventDefault();

        const authorId = this.props.userId;

        if (this.state.decisionCome !== 'нужно выбрать') {
            const {withMe, decisionCome} = this.state;

            this.props.saveMyAnswer({
                withMe,
                decisionCome,
                authorId,
            });
        } else {
            findDOMNode(this.popUp).classList.remove('hidden');
            this.props.removeMyAnswer(authorId);
        }

    };

    changeName = (event) => {
        this.setState({userName: event.currentTarget.value});
    };

    changeWithMe = (event) => {
        this.setState({withMe: +event.currentTarget.value});
    };

    changeDecisionCome = (event) => {
        this.setState({decisionCome: event.currentTarget.value});
    };

    componentDidMount () {
        this.setState({
            ...this.state,
            ...this.props.lastAnswerOfUser,
        });
    }

    render () {
        const
            {userHasAuthenticated, firstName, lastName} = this.props,
            {withMe, decisionCome} = this.state;

        if (!userHasAuthenticated) {
            return false;
        }

        return (
            [<form key="form" action="" onSubmit={this.sendAnswer}>
                <label htmlFor="userName">Я</label>
                <input type="text" id="userName" defaultValue={firstName + ' ' + lastName} onChange={this.changeName}/>
                <label htmlFor="withMe">Со мной</label>
                <input type="number" id="withMe" onChange={this.changeWithMe} value={withMe} />
                <select name="willCome" id="" onChange={this.changeDecisionCome} value={decisionCome}>
                    <option value="нужно выбрать">нужно выбрать</option>
                    <option value="я точно приду">я точно приду</option>
                    <option value="я точно не приду">я точно не приду</option>
                </select>
                <input type="submit"/>
            </form>,
            <PopUp
                key="popUp"
                message={`${firstName} ${lastName}, заполните форму, когда будет известно`}
                ref={(node) => { this.popUp = node; }}
                okButton={{
                    name: 'Хорошо',
                    visible: true,
                }}
            />]
        )
    };
}

function mapStateToProps(state) {
    const
        lastAnswerOfUserIndex = getIndexUsingId(state.answers.listOfAnswers, state.auth.userId),
        lastAnswerOfUser = lastAnswerOfUserIndex !== -1 ? state.answers.listOfAnswers[lastAnswerOfUserIndex]: {};

    return {
        ...state.auth,
        lastAnswerOfUser,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveMyAnswer: bindActionCreators(saveMyAnswerAction, dispatch),
        removeMyAnswer: bindActionCreators(removeMyAnswerAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAnswer);