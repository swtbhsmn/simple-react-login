import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
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
                        component={()=><Home props={this.props}/>}
                    />
                </Switch>
              
            </div>
        )
    }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));