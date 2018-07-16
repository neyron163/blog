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
            classActive: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
        this.setState({
            classActive: false,
            title: '',
            body: ''
        });

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
              
              <br />
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