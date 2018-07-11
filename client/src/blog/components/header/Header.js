import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: false
        }

        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        document.body.classList.toggle('dark-theme');
        this.setState({ name: !this.state.name });

    }
  render() {
    return (
      <div className="head">
        <header>
          <div className="nick-name">Welcome to Neyron's blog</div>
             <div>
                 <button className="btn" onClick={this.onClick}>Toggle on {this.state.name ? 'White' : 'Dark'} Theme</button>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;