const INITIAL_STATE =  {
    sections : [
        {
          title: "Play now",
          id: 1,
          linkUrl: "play"
        },
        {
          title: "Leaderboard",
          id: 2,
          linkUrl: "leaderboard"
        },
        {
          title: "Results",
          id: 3,
          linkUrl: "results"
        },
        {
          title: "Challenge Nanzo",
          id: 4,
          linkUrl: "challenge-nanzo"
        },
        {
          title: "Battle",
          id: 5,
          linkUrl: "battle"
        },
        {
          title: "Admin",
          id: 6,
          linkUrl: "admin"
        }
      ]
}

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;