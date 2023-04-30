import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     Film Blog updated by Seungah Choi
     
     <div className="img">
     <img src={process.env.PUBLIC_URL + '/film.jpg' } alt="Film"  />
     
     </div>
     </header>
    );
  }
}

export default Header;