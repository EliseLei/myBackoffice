import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Header from './Header/Header';
import Footer from './Footer/Footer';
import ListUsers from "./pages/ListUsers"
import AddUserPage from "./pages/AddUserPage"
import UserDetail from "./pages/UserDetail"
import UserDetailLocal from "./pages/UserDetailLocal"
import EditUserLocal from "./pages/EditUserLocal"

import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      const usersLocal = JSON.parse(localStorage.getItem('myUserLocal'));
      this.addUser = this.addUser.bind(this);
      this.updateUser = this.updateUser.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
      this.state = {
        usersLocal:usersLocal ? usersLocal : []
      }
  }

  updateUser(idUser, newfirstname, newlastname, newemail, newavatar) {
    const newUserLocal = this.state.usersLocal.filter(function(user) {
      if (idUser == user.idUser) {
        return false;
      }
      else {
        return true;
      }
    })
    localStorage.setItem('myUserLocal', JSON.stringify([...newUserLocal, {idUser:idUser, firstname:newfirstname, lastname: newlastname, email:newemail, avatar:newavatar}]));

    this.setState({
       firstname:newfirstname,
       lastname:newlastname,
       email:newemail,
       avatar:newavatar,
       usersLocal: [...newUserLocal, {idUser:idUser, firstname:newfirstname, lastname: newlastname, email:newemail, avatar:newavatar}],
     });
  }

  deleteUser(idUser) {
    this.state.usersLocal.splice(idUser, 1);
    this.setState({
      users:this.state.usersLocal
    });
  }

  addUser(firstname, lastname, email, avatar) {
   localStorage.setItem('myUserLocal', JSON.stringify([...this.state.usersLocal, {idUser:this.state.usersLocal.length, firstname:firstname, lastname: lastname, email:email, avatar:avatar}]));
   this.setState({
      idUser:this.state.usersLocal.length,
      firstname:firstname,
      lastname:lastname,
      email:email,
      avatar:avatar,
      usersLocal: [...this.state.usersLocal, {idUser:this.state.usersLocal.length, firstname:firstname, lastname: lastname, email:email, avatar:avatar}]
    });

  }

  render() {
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <ListUsers deleteUser={this.deleteUser} usersLocal={this.state.usersLocal} />} />
          <Route path="/addUser" render={(props) => <AddUserPage {...props} addUser={this.addUser}/>} />
          <Route path="/detailUser/:id" render={(props) => <UserDetail {...props}/>} />
          <Route path="/detailUserLocal/:id" render={(props) => <UserDetailLocal usersLocal={this.state.usersLocal} {...props}/>} />
          <Route path="/editUserLocal/:id" render={(props) => <EditUserLocal updateUser={this.updateUser} usersLocal={this.state.usersLocal} {...props}/>} />

          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
