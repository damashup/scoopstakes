import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case UserActionTypes.SIGN_IN_SUCCESS:  
            return {
                ...state,
                currentUser: action.payload,
                isFetching: false,
                error: null
            };
        
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                isFetching: false,
                error: null
            };

        case UserActionTypes.SIGN_IN_FAILURE:    
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:        
            return{
                ...state,
                error: action.payload,
                isFetching: false,
            };

        default:
            return state

    }
};

export default userReducer;