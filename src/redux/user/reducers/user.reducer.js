import UserActionTypes from '../types/user.types';

const INITIAL_STATE = {
    currentUser: null,
    isFetching: false,
    error: null,
    providers: null
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
        
        case UserActionTypes.FETCH_SIGN_IN_PROVIDERS_SUCCESS:  
            return {
                ...state,
                providers: action.payload,
                isFetching: false,
                error: null
            };    
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                providers: null,
                isFetching: false,
                error: null
            };
        
        case UserActionTypes.SIGN_IN_FAILURE:    
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE: 
        case UserActionTypes.FETCH_SIGN_IN_PROVIDERS_FAILURE:       
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