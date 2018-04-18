import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {saveMyAnswerAction, removeMyAnswerAction} from 'Actions/answersActions';
import {getIndexUsingId} from 'Root/tools';

export default class PopUp extends Component {
    ok = () => {
        findDOMNode(this.popUp).classList.add('hidden');
        if (this.props.okButton.handler) {
            this.props.okButton.handler();
        }
    }

    cancel = () => {
        findDOMNode(this.popUp).classList.add('hidden');
        if (this.props.cancelButton.handler) {
            this.props.cancelButton.handler();
        }
    }

    render () {
        const {okButton, cancelButton} = this.props

        return (
            <div className="pop-up hidden" ref={(node) => { this.popUp = node; }}>
                <p>{this.props.message}</p>
                <button
                    className={okButton && okButton.visible ? '' : 'hidden'}
                    onClick={this.ok}>{okButton && okButton.name ? okButton.name : ''}
                </button>
                <button
                    className={cancelButton && cancelButton.visible ? '' : 'hidden'}
                    onClick={this.cancel}>{cancelButton && cancelButton.name ? cancelButton.name: ''}
                </button>
            </div>
        )
    };
}
