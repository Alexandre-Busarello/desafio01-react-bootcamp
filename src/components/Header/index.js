import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <span className="logo">facebook</span>
          <span className="perfil">Meu perfil</span>
        </div>
      </div>
    )
  }
}

export default Header;