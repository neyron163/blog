import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import './postform.css';


class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      classActive: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit(e) {
    if (this.state.title.length < 1) {
      this.setState({ classActive: true });
      return e.preventDefault();
    } else if (this.state.body.length < 1) {
      this.setState({ classActive: true });
      return e.preventDefault();
    }

    e.preventDefault();

    const post = {
      postID: Math.random(),
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
    this.setState({ classActive: false });

  }
  activeClass(){
      if(this.state.classActive){
          return 'form-input';
      }else{
          return '';
      }
  }
  render() {
      return (
        <div>
          <h1>Add Post</h1>
          <form onSubmit={this.onSubmit}>

            <div className={this.activeClass()}>
              <label>Title: </label><br />
              <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            </div>

            <div className={this.activeClass()}>
              <label>Body: </label><br />
              <textarea name="body" value={this.state.body} onChange={this.onChange} />
            </div>
            
            <br />
            <button type='sumbmit'>Sumbmit</button>
          </form>
        </div>
      );
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);