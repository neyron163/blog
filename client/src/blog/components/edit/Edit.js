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
            body: ''
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
    onSubmit(e){
        e.preventDefault();

        this.props.editPost(this.props.id, this.state.title, this.state.body);
    }
    render() {
        if(this.props.check){
            return (
                <form className="edit-ui" onSubmit={this.onSubmit}>
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
                <div> </div>
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