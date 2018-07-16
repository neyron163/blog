import React, { Component } from 'react';
import './header.css';



class Header extends Component {
    // constructor this is es6 in js class
    constructor(props){
        super(props);
        // our state component
        this.state = {
            name: false
        }

        this.onClick = this.onClick.bind(this);
    }
    // this is function like switch
    onClick(){
        // native js
        document.body.classList.toggle('dark-theme');
        // just change state true/false
        this.setState({ name: !this.state.name });
    }
  render() {
    return (
      <div className="head">
        <header>
            <div className="flex-container">
                <a href="/"><div className="nick-name">Welcome to blog</div></a>
                    <div>
                        <button className="ui red inverted button" onClick={this.onClick}>Toggle on {this.state.name ? 'White' : 'Dark'} Theme</button>
                    </div>
            </div>
        </header>
      </div>
    );
  }
}


export default Header;