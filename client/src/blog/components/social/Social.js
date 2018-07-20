import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './social.css';

class Social extends Component {
    render() {
        return (
            <div className="center">
                    <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                    </Button>
            </div>
        );
    }
}

export default Social;