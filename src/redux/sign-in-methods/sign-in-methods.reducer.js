const INITIAL_STATE = {
    providers : [
        {
          id: 1,
          provider: 'Email',
          name: 'Email/ Password',
          url: 'password'
        },
        {
          id: 2,
          provider: 'googleProvider',
          name: 'Google',
          url: 'google.com'
        },
        {
          id: 3,
          provider: 'facebookProvider',
          name: 'Facebook',
          url: 'facebook.com'
        },
        {
          id: 4,
          provider: 'twitterProvider',
          name: 'Twitter',
          url: 'twitter.com'
        },
        {
          id: 5,
          provider: 'githubProvider',
          name: 'Github',
          url: 'github.com'
        },
      ]
};

const signInMethodsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default signInMethodsReducer;