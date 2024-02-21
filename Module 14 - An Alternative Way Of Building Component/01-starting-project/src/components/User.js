import { Component } from 'react';
import classes from './User.module.css';


class User extends Component{
  // constructor(){
  //   // helps in initialisation work
  // }

  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional equivalent
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
