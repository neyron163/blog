import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postUser, exitUser} from '../../actions/postActions';
import PropTypes from 'prop-types';

import './enter.css';
class Enter extends Component {
  constructor (props) {
    super (props);

    this.state = {
      popup: false,
      login: '',
      password: '',
      loginEmpty: false,
      passwordEmpty: false,
      inputsEmpty: false,
      style: {
        opacity: 0,
        transition: 'opacity 0.6s',
      },
    };

    this.onClickOpen = this.onClickOpen.bind (this);
    this.onClickClose = this.onClickClose.bind (this);
    this.onClickExit = this.onClickExit.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
    this.onChange = this.onChange.bind (this);
  }
  onChange (e) {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit (e) {
    if (this.state.login === '' && this.state.password === '') {
      this.setState ({inputsEmpty: true});
      return e.preventDefault ();
    }
    if (this.state.login === '') {
      this.setState ({loginEmpty: true});
      return e.preventDefault ();
    }

    if (this.state.password === '') {
      this.setState ({passwordEmpty: true});
      return e.preventDefault ();
    }

    e.preventDefault ();

    const user = [
      {
        login: this.state.login,
        password: this.state.password,
      },
    ];

    this.props.postUser (user);
  }
  onClickOpen () {
    this.setState ({
      popup: true,
      style: {
        opacity: 1,
        transition: 'opacity 0.6s',
      },
    });
  }
  onClickClose () {
    this.setState ({popup: false});
    document.body.classList.remove ('enter-popup-active');
  }
  onClickExit () {
    this.setState ({popup: false});
    localStorage.setItem ('response', false);
    this.props.exitUser ();
  }
  removeBackground () {
    document.body.classList.remove ('enter-popup-active');
    return (
      <button onClick={this.onClickExit} className="ui red long button">
        Exit
      </button>
    );
  }
  render () {
    const removeBackground = () => {
      document.body.classList.remove ('enter-popup-active');
      return (
        <button onClick={this.onClickExit} className="ui red long button">
          Exit
        </button>
      );
    };
    const openedPopup = state => {
      if (state) {
        document.body.classList.add ('enter-popup-active');
        return (
          <div
            className={
              this.state.popup ? 'enter-container active' : 'enter-container'
            }
            style={this.state.style}
          >
            <div onClick={this.onClickClose} className="enter-close">
              <i className="close small inverted icon" />
            </div>
            <form className="ui form form-enter" onSubmit={this.onSubmit}>
              <div
                className={
                  this.state.loginEmpty || this.state.inputsEmpty
                    ? 'ui long input error'
                    : 'ui long input'
                }
              >
                <input
                  placeholder="Your login"
                  type="text"
                  name="login"
                  onChange={this.onChange}
                  value={this.state.login}
                />
              </div>
              <div
                className={
                  this.state.passwordEmpty || this.state.inputsEmpty
                    ? 'ui long input error'
                    : 'ui long input'
                }
              >
                <input
                  placeholder="Your password"
                  type="password"
                  name="password"
                  onChange={this.onChange}
                  value={this.state.password}
                />
              </div>
              <button className="ui inverted green button">SEND</button>
            </form>
          </div>
        );
      }
    };
    return (
      <div className="enter">
        {!this.props.value
          ? <div>
              <button
                onClick={this.onClickOpen}
                className="ui green long button"
              >
                Enter like Admin
              </button>
              {openedPopup (this.state.popup)}
            </div>
          : <div> {removeBackground ()} </div>}
      </div>
    );
  }
}
Enter.propTypes = {
  postUser: PropTypes.func.isRequired,
  exitUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  response: state.posts.items,
});

export default connect (mapStateToProps, {postUser, exitUser}) (Enter);
