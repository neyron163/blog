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

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            selectedFile: {},
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
        formData.append('text', JSON.stringify([{title: this.state.title, body: this.state.body, image: this.state.fileName}]));



        this.props.createPost(formData);
        

        this.setState({
            classActive: false,
            title: '',
            body: '',
            selectedFile: {},
            fileName: ''
        });

    }
    fileChangedHandler( e ) {
        const file = e.target.files[0];
        if(file){
            this.setState({ selectedFile: file, fileName: file.name });
        }else{
            this.setState({ fileLength: file })
        }
    }
    render() {
        return (
            <div className="top-side">
            <h1>Enter your post</h1>
            <form onSubmit={this.onSubmit} className="ui form">
  
                <div className={ this.state.classActive ? "ui long error input" : "ui long input"}>
                  <input type="text" placeholder="Your title" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
  
                <div className={this.state.classActive ? "filed-form error" : "filed-form"}>
                  <textarea name="body" rows="6" placeholder="Your description" value={this.state.body} onChange={this.onChange} />
                </div>

                <div className="upload">
                <div className="ui action input">
                    <label htmlFor="file" className="ui icon button ">
                        {/* <i class="file upload icon"></i> */}
                        <i className="file image icon"></i>
                        <span>{this.state.fileName}</span>
                        <input type="file" id="file" className="file-input" onChange={this.fileChangedHandler.bind(this)} />
                    </label>
                    </div>
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