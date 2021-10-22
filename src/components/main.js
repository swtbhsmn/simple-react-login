import React from 'react';
import { withRouter, Switch, Route ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './home';
import Login from './login';
import {userLogin} from '../redux/action_creator';
const mapStateToProps = state => {
    return {

        user: state.user
    };

}
const mapDispatchToProps = dispatch => ({
    login: (data,history) => dispatch(userLogin(data,history)),
})

class Main extends React.Component {
    constructor(props) {
        super(props)
   
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
       
        return (
            <div className="main">
                <Switch>
                    <Route
                        exact={true}
                        path={'/'}
                        component={()=><Login props={this.props}/>}
                    />
                    <Route
                        exact={true}
                        path={'/home'}
                        component={()=> this.props.user.data.token!==undefined?<Home props={this.props}/>:<Redirect to="/"/>}
                    />
                </Switch>
              
            </div>
        )
    }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));