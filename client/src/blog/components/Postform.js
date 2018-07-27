import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';
import './postform.css';

class Postform extends Component {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
      body: '',
      selectedFile: {},
      fileName: '',
      classActive: false,
      fileError: '',
    };

    this.onChange = this.onChange.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
  }
  onChange (e) {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit (e) {
    if (this.state.title.length < 1) {
      this.setState ({
        classActive: true,
      });
      return e.preventDefault ();
    } else if (this.state.body.length < 1) {
      this.setState ({
        classActive: true,
      });
      return e.preventDefault ();
    }

    e.preventDefault ();

    const formData = new FormData ();
    formData.append ('myFile', this.state.selectedFile, this.state.fileName);
    formData.append (
      'text',
      JSON.stringify ([
        {
          title: this.state.title,
          body: this.state.body,
          image: this.state.fileName,
        },
      ])
    );

    this.props.createPost (formData);

    this.setState ({
      classActive: false,
      title: '',
      body: '',
      selectedFile: {},
      fileName: '',
    });
  }
  fileChangedHandler (e) {
    const file = e.target.files[0];
    const types = ['image/jpeg', 'image/jpg', 'image/png'];
    if (file) {
      if (file.type === types[0]) {
        this.setState ({
          selectedFile: file,
          fileName: file.name,
          fileError: '',
        });
      } else {
        this.setState ({
          fileError: 'You are cannot upload ' + file.type + ', only image jpeg',
        });
      }
    } else {
      this.setState ({
        fileLength: file,
        fileError: 'You are canceled',
      });
    }
  }
  render () {
    if (this.props.value) {
      return (
        <div className="top-side">
          <h1> Enter your post </h1> <form
            onSubmit={this.onSubmit}
            className="ui form"
          >

            <div
              className={
                this.state.classActive ? 'ui long error input' : 'ui long input'
              }
            >
              <input
                type="text"
                placeholder="Your title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div
              className={
                this.state.classActive ? 'filed-form error' : 'filed-form'
              }
            >
              <textarea
                name="body"
                rows="6"
                placeholder="Your description"
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>

            <div className="upload-container">
              <label htmlFor="file">
                <i className="cloud upload massive icon"> </i>
                <span> Choose a file </span>
                <span className="file-name"> {this.state.fileName} </span>
                <span className="file-error"> {this.state.fileError} </span>
                <input
                  type="file"
                  id="file"
                  className="file-input"
                  onChange={this.fileChangedHandler.bind (this)}
                />
              </label>
            </div>
            <button className="ui red long button" type="sumbmit">
              Sumbmit
            </button>
          </form>
        </div>
      );
    }
    return null;
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect (null, {
  createPost,
}) (Postform);
