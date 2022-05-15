import React, { Component } from 'react';
import './editUser.css';
import { NavLink } from "react-router-dom";

class EditUserLocal extends Component {

  constructor(props) {
      super(props);
      this.updateUser = this.updateUser.bind(this);
      this.state = {
        firstname:this.props.usersLocal[this.props.match.params.id].firstname,
        lastname:this.props.usersLocal[this.props.match.params.id].lastname,
        email:this.props.usersLocal[this.props.match.params.id].email
      }
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

  updateUser(event) {
    event.preventDefault();
    this.props.updateUser(this.props.match.params.id, this.state.firstname, this.state.lastname, this.state.email);
    this.props.history.push("/");
    this.setState({
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      email:this.state.email
    });
  }


  render() {
    return (
      <div className="EditUser">
        <div className="container">
          <NavLink to="/" exact activeClassName="active">
            <p>Revenir à la liste des utilisateurs</p>
          </NavLink>
          <div className="EditUser-container">
            <div className="EditUser-inner">
              <form>
                <div className="EditUser-avatar">
                  <img alt="avatar" key={this.props.usersLocal.avatar} src={this.props.usersLocal[this.props.match.params.id].avatar} />
                </div>

                <div className="form-item">
                  <label>
                    Prénom
                    <input
                      type="text"
                      placeholder="firstname"
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
                      placeholder="firstname"
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
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.onChangeUserEmail.bind(this)}
                    />
                  </label>
                </div>

                <div className="EditUser-action">
                  <button onClick={this.updateUser}>Mettre à jour</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditUserLocal;
