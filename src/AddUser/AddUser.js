import React from 'react';
import AddUserForm from './AddUserForm';
import './addUser.css';

class AddUser extends React.Component {

  render() {

    return (
      <div className="AddUser">
        <div className="AddUser-container">
          <AddUserForm history={this.props.history} addUser={this.props.addUser}/>
        </div>
      </div>
    );
  }

}

export default AddUser;
