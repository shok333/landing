import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveMyAnswerAction, removeMyAnswerAction} from 'Actions/answersActions';
import {getIndexUsingId} from 'Root/tools';
import PopUp from 'Components/PopUp';

class Answers extends Component {
    constructor (props) {
        super(props);

    }

    openPopUp = () => {
        findDOMNode(this.popUp).classList.remove('hidden');
    };

    removeAnswer = () => {
        const
            authorId = this.props.currentUserId,
            removeMyAnswer = this.props.removeMyAnswer;
        return function () {
            removeMyAnswer(authorId)
        }
    }

    render () {
        const {listOfAnswers} = this.props;

        if (!listOfAnswers || (listOfAnswers && listOfAnswers.length === 0)) {
            return <p>К сожалению, пользователи ещё не сотавили ни одного ответа...</p>
        }

        const answersElements = listOfAnswers.map((item) => {
            const
                {withMe, decisionCome, authorId} = item,
                {listOfUsers, currentUserId} = this.props;

            let targetUser = []; //todo переделать
            listOfUsers.forEach((item) => {
                if (item.userId === authorId) {
                    targetUser = item;
                }
            });

            const {avatar, firstName, lastName} = targetUser;

            return (
                <tr key={authorId}
                    className={authorId === currentUserId ? "current-user" : ""}
                    onClick={authorId === currentUserId ? this.openPopUp : ()=>{}}
                >
                    <td><img src={avatar} alt={firstName + ' ' +lastName}/></td>
                    <td>{firstName + ' ' +lastName}</td>
                    <td>{decisionCome}</td>
                    <td>{withMe !== 0 && decisionCome!== 'я точно не приду' ? withMe: ''}</td>
                </tr>
            )
        });

        let targetUser = [];//todo переделать
        this.props.listOfUsers.forEach((item) => {
            if (item.userId === this.props.currentUserId) {
                targetUser = item;
            }
        });

        const {firstName, lastName} = targetUser;

        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th></th>
                        <th>Имя</th>
                        <th>Решение</th>
                        <th>Люди со мной</th>
                    </tr>
                    {answersElements}
                    </tbody>
                </table>
                <PopUp
                    message={`Я, ${firstName} ${lastName}, хочу отказаться от своего решения и удалить свой ответ`}
                    ref={(node) => { this.popUp = node; }}
                    okButton={{
                        name: 'Да',
                        handler: this.removeAnswer(),
                        visible: true,
                    }}
                    cancelButton={{
                        name: 'Нет',
                        handler: null,
                        visible: true,
                    }}
                />
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        listOfAnswers: state.answers.listOfAnswers,
        listOfUsers: state.users,
        currentUserId: state.auth.userId,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeMyAnswer: bindActionCreators(removeMyAnswerAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);