import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    connect
} from 'react-redux';
import { editPost } from '../../actions/postActions';
import './edit.css';

import {Link} from "react-router-dom";

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
            toggle: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount() {
        if(this.getHeight){
            if(this.getHeight.clientHeight > 60) {
                this.getHeight.style.height = 60 + 'px';
            }
        }
    }
    onClick() {
        this.setState({ toggle: false });
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
    }
    render() {
        console.log(this.props.check)
        if(this.props.check && this.state.toggle){
            return (
                <div>
                <form className="ui form edit-form" onSubmit={this.onSubmit}>
                    <div className="ui long input">
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div className="filed-form">
                        <textarea rows="6" name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <button className="ui green long button" type="sumbmit">Save</button>
                </form>
                <button className="ui red long button" onClick={this.onClick}>Close</button>
                </div>
            );
        }else{
            return (
                <div>
                    <h3>{this.props.title}</h3>
                    <p ref={(node) => {this.getHeight = node}}>{this.props.body}</p>
                    <Link to={this.props.post}>Learn more...</Link>
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