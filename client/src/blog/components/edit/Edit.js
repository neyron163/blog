import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import { editPost } from '../../actions/postActions';


class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            toggle: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onPaste(e) {
        console.log(e.clipboardData.getData('text'))
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
     }
    image(img) {
        if(img){
            return <img src={'/images/' + img} aria-hidden alt="image"/>
        }
    }
    onSubmit(e){
        e.preventDefault();

        this.props.editPost(this.props.id, this.state.title, this.state.body);

        this.setState({
            toggle: false
        })
    }
    render() {
        if(this.props.check && this.state.toggle){
            return (
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="ui long input">
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div className="filed-form">
                        <textarea rows="6" name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <button className="ui green long button" type="sumbmit">Save</button>
                </form>
            );
        }else{
            return (
                <div>
                    <h3>{this.props.h3}</h3>
                    <p>{this.props.body}</p>
                    {this.image(this.props.image)}
                </div>
            )
        }
    }
}
Edit.propTypes = {
    editPost: PropTypes.func.isRequired
}

export default connect(null, {
    editPost
})(Edit);