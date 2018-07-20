import React, { Component } from 'react';

class Edit extends Component {
    render() {
        if(this.props.check){
            return (
                <div>
                    <div className="ui long input">
                        <input type="text" name="title"/>
                    </div>
                    <div className="filed-form">
                        <textarea rows="6" type="text" name="body"/>
                    </div>
                </div>
            );
        }else{
            return (
                <div> </div>
            )
        }
    }
}

export default Edit;