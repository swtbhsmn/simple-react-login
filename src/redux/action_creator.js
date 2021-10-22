import * as ActionTypes from './action_types';

const url = 'https://app.herokuapp.com';
const userFakeData = {
    username:"swetabh",
    password:"0000"
}

export const userLogin= (data,history) => dispatch => {

    dispatch(logging(true));
    try{
        if(data!=null){

            if(data.username===userFakeData.username&&data.password===userFakeData.password){
                history.push('/home');
                dispatch(loggingSuccess(userFakeData))
            }
            else{
                dispatch(loggingFailed("Invalid login"));
            }

        }
    }
    catch(error){ 
        dispatch(loggingFailed(error.message));
    };
    //user 
  /*   return fetch(`${url}/login`, {

        method: "GET",

    })
        .then(response => {

            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {

            //console.log(response);
            dispatch(loggingSuccess(response))


        })
        .catch(error => dispatch(loggingFailed(error.message))); */
}



export const logging= () => ({
    type: ActionTypes.LOGGING
});

export const loggingSuccess = (response) => ({
    type: ActionTypes.LOGGING_SUCCESS,
    payload: response
});

export const loggingFailed = (response) => ({
    type: ActionTypes.LOGGING_FAILED,
    payload: response
});
