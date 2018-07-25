import React, { Component } from 'react';
import {connect} from 'react-redux';
import {postUser} from '../../actions/postActions';
import PropTypes from 'prop-types';

import './enter.css';
class Enter extends Component {
    constructor(props){
        super(props);

        this.state = {
            popup: false,
            login: '',
            password: ''
        }

        this.onClickOpen = this.onClickOpen.bind(this);
        this.onClickClose = this.onClickClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('login: ' + this.state.login)
        console.log('password: ' + this.state.password)
        const user = [{
            'login': this.state.login,
            'password': this.state.password
         }
        ]

        this.props.postUser(user);
    }
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
                        <form className="ui form" onSubmit={this.onSubmit}>
                        <div className="ui long input">
                            <input placeholder="Your login" type="text" name="login" onChange={this.onChange} value={this.state.login}/>
                        </div>
                        <div className="ui long input">
                            <input placeholder="Your password" type="password" name="password" onChange={this.onChange} value={this.state.password}/>
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
Enter.propTypes = {
    postUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    response: state.posts.items
});

export default connect(mapStateToProps, {postUser})(Enter);