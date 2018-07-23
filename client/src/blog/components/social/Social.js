import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './social.css';

class Social extends Component {
    render() {
        return (
            <div className="center">
                    <a href="https://www.facebook.com/profile.php?id=100009124048946">
                    <Button color='facebook'>
                    <Icon name='facebook' /> Facebook
                    </Button>
                    </a>
            </div>
        );
    }
}

export default Social;