import React from 'react';

class Home extends React.Component{
    render(){
        const{username,password} = this.props.props.user.data;
        return(
            <>
            <h2>Welcome, {username} !</h2>
            <b>Your credentials</b>
          <fieldset>
          <p>username: {username}</p>
            <p>password:{password}</p>
          </fieldset>
           
            </>
        )
    }
}
export default Home;