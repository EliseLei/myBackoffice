import React, { Component } from 'react';
import AddUser from "../AddUser/AddUser"

class AddUserPage extends Component {

  render() {
    return (
      <div className="AddUserPage">
        <div className="container">
          <h1>Ajouter un user</h1>
          <AddUser history={this.props.history} addUser={this.props.addUser}/>
        </div>
      </div>
    );
  }
}
export default AddUserPage;
