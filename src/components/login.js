import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    componentDidMount()
    {
        console.log(this.props)
    }
    handleSubmit(event){
        event.preventDefault();
        const{username,password}=this.state;
        console.log(`${username} ${password}`)
        let data = {username:username,password:password}
        this.props.props.login(data,this.props.props.history);
    }
    onChangeHandler(event){
        this.setState({[event.target.name]: event.target.value});
      
    }
    render(){
        return(
            <>
               <div className="login-container">
                 <h6 style={{color:"red"}}>{this.props.props.user.errMess}</h6>
                    <h3>Login</h3>
                  <form onSubmit={this.handleSubmit}>
                  <div>
                        <label>Username:</label>
                        <input type="text" autoComplete="off" name="username" id="u-value" value={this.state.username} onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" autoComplete="off" name="password" id="p-value" value={this.state.password} onChange={this.onChangeHandler}/>
                    </div>
                    <button type="sumit">Button</button>
                  </form>
                  <div>
                      Type:-
                      <br/>
                      username:swetabh
                      <br/>
                      password:0000
                  </div>
               </div>
            </>
        )
    }
}
export default Login;