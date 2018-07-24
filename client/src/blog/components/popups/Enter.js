import React, { Component } from 'react';
import './enter.css';
class Enter extends Component {
    constructor(props){
        super(props);

        this.state = {
            popup: false
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
    }
    // componentWillMount() {
    //     if(this.state.popup){
    //         document.body.classList.add('enter-popup');
    //     }
    // }
    onClickOpen() {
        this.setState({ popup: true });
        document.body.classList.add('enter-popup-active');
    }
    onClickClose(){
        this.setState({ popup: false });
        document.body.classList.remove('enter-popup-active');
    }
    render() {
        const openedPopup = (state) => {
            if(state){
                return (
                    <div className={this.state.popup ? "enter-container active" : "enter-container"}>
                        <div onClick={this.onClickClose} className="enter-close"><i className="close small inverted icon"></i></div>
                        <form className="ui form">
                        <div className="ui long input">
                            <input placeholder="Your login" type="text"/>
                        </div>
                        <div className="ui long input">
                            <input placeholder="Your password" type="password"/>
                        </div>
                            <button className="ui inverted green button">send</button>
                        </form>
                    </div>
                )
            }
        }
        return (
            <div className="enter">
                <button onClick={this.onClickOpen} className="ui green long button">Enter like Admin</button>
                {openedPopup(this.state.popup)}
            </div>
        );
    }
}

export default Enter;