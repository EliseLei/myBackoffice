import React from 'react';
import './addUserForm.css';

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      avatar:'',
      usersLocal:[]
    };
  }


  onChangeUserFirstName(event) {
    event.preventDefault();
    this.setState({
      firstname:event.target.value,
    });
  }

  onChangeUserLastName(event) {
    event.preventDefault();
    this.setState({
      lastname:event.target.value,
    });
  }

  onChangeUserEmail(event) {
    event.preventDefault();
    this.setState({
      email:event.target.value,
    });
  }

  onChangeUserAvatar(event) {
    event.preventDefault();
    this.setState({
      avatar:URL.createObjectURL(event.target.files[0])
    });
  }

  addUser(event) {
    event.preventDefault();
    if(this.state.firstname !== "" || this.state.lastname !== "" || this.state.email !== "" || this.state.avatar !== "") {
      this.props.addUser(this.state.firstname, this.state.lastname, this.state.email, this.state.avatar, this.state.usersLocal);
      this.props.history.push("/");
      this.setState({
        firstname:'',
        lastname:'',
        email:''
      });
    }
  }


  render() {
    return (
      <form id="userForm" className="AddUserForm">
        <div className="form-item">
          <label>
            Prénom
            <input
              type="text"
              id="firstname"
              placeholder="firstname"
              required="required"
              value={this.state.firstname}
              onChange={this.onChangeUserFirstName.bind(this)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            Nom
            <input
              type="text"
              id="lastname"
              placeholder="lastname"
              required="required"
              value={this.state.lastname}
              onChange={this.onChangeUserLastName.bind(this)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            Email
            <input
              type="email"
              id="email"
              placeholder="email"
              required="required"
              value={this.state.email}
              onChange={this.onChangeUserEmail.bind(this)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            Avatar
            <input
              type="file"
              accept="image/*"
              id="avatar"
              required="required"
              placeholder="Ajouter un avatar"
              value={this.state.avatar.paths}
              onChange={this.onChangeUserAvatar.bind(this)}
            />
          </label>
        </div>
        <button onClick={this.addUser}>Ajouter</button>
      </form>
    );
  }
}
// Render
export default AddUserForm;
