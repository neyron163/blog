import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import {
    createPost
} from '../actions/postActions';
import './postform.css';
import axios from 'axios';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            selectedFile: '',
            fileName: '',
            classActive: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.uploadHandler = this.uploadHandler(this);
        // this.fileChangedHandler = this.fileChangedHandler(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    onSubmit(e) {
        if (this.state.title.length < 1) {
            this.setState({
                classActive: true
            });
            return e.preventDefault();
        } else if (this.state.body.length < 1) {
            this.setState({
                classActive: true
            });
            return e.preventDefault();
        }

        e.preventDefault();
        
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile, this.state.fileName);
        formData.append('text', JSON.stringify([{title: this.state.title, body: this.state.body, image: this.state.fileName}]))

        const post = {
            title: this.state.title,
            body: this.state.body,
            image: this.state.fileName,
        }

        this.props.createPost(formData);
        

        // this.setState({
        //     classActive: false,
        //     title: '',
        //     body: ''
        // });

    }
    uploadHandler(){
        const body = JSON.stringify(this.state.body);
        const formData = new FormData();
        formData.append('myFile', this.state.selectedFile, this.state.fileName);
        formData.append('text', JSON.stringify([{title: this.state.title}, {body: this.state.body}]))
        this.props.createPost(formData);
        // axios.post('/postFiles', formData, {
        //     onUploadProgress: progressEvent => {
        //     console.log(progressEvent.loaded / progressEvent.total == 1)
        //     }
        // })
    }
    fileChangedHandler( e ) {
        const file = e.target.files[0];
        if(file){
            this.setState({ selectedFile: file, fileName: file.name });
        }
    }

    activeClass(check) {
        if(check){
            if (this.state.classActive) {
                return "ui long error input";
            }
                return "ui long input";
        }else{
            if (this.state.classActive) {
                return "filed-form error";
            } else {
                return "filed-form";
            }
        }
    }
    render() {
        return (
            <div className="top-side">
            <h1>Enter your post</h1>
            <form onSubmit={this.onSubmit} className="ui form">
  
                <div className={this.activeClass(true)}>
                  <input type="text" placeholder="Your title" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
  
                <div className={this.activeClass(false)}>
                  <textarea name="body" rows="6" placeholder="Your description" value={this.state.body} onChange={this.onChange} />
                </div>

                <div className="upload">
                    <input type="file" onChange={this.fileChangedHandler.bind(this)} />
                    <button onClick={this.uploadHandler.bind(this)}>Upload!</button>
                </div>

              <button className="ui red long button" type='sumbmit'>Sumbmit</button>
            </form>
          </div>
        );
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {
    createPost
})(Postform);