 
import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
// we can also use localStorage.removeItem('Token');
    window.location.href = "/component/login/LogIn"
  }
 
  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    )
  }
}
 