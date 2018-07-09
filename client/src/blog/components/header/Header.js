import React, { Component } from 'react';
import './header.css';


class Header extends Component {
  render() {
    return (
      <div className="content">
        <header>
          <div className="nick-name">Welcome to Neyron's blog</div>
             <div>
                 <button className="btn">Toggle on Dark Theme</button>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;