import React, { Component } from 'react';
import './Navigation.css';
class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><a href=''><i className='fa fa-home'></i></a></li>
          <li><a href=''><i className='fa fa-search'></i></a></li>
          <li><a href=''><i className='fa fa-user-o'></i></a></li>
          <li><a href=''><i className='fa fa-calendar-o'></i></a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
