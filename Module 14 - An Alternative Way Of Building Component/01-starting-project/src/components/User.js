import { Component } from 'react';
import classes from './User.module.css';


class User extends Component{
  // constructor(){
  //   // helps in initialisation work
  // }

  componentWillUnmount(){
    console.log("User will unmount !!!")
    // this is equivalent to the cleanup function of the useEffect it will run 3 times beacuse we have rendered the component 3 times. 
  }

  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// Functional equivalent
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;