import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SportsKabaddi from '@material-ui/icons/SportsKabaddi';
import Whatshot from '@material-ui/icons/Whatshot';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const INITIAL_STATE =  {
    sections : [
        {
          title: "Play now",
          id: 1,
          linkUrl: "play",
          href: "/play",
          icon: <LocalPlayIcon />,
          private: false,
          publicOnly: true
        },
        {
          title: "Dashboard",
          id: 2,
          linkUrl: "dashboard",
          href: "/dashboard",
          icon: <DashboardIcon />,
          private: true
        },
        {
          title: "Leaderboards",
          id: 3,
          linkUrl: "leaderboards",
          href: "/leaderboards",
          icon: <SubtitlesIcon />,
          private: false
        },
        {
          title: "Results",
          id: 4,
          linkUrl: "results",
          href: "/results",
          icon: <AssignmentTurnedInIcon />,
          private: true
        },
        {
          title: "Challenge Nanzo",
          id: 5,
          linkUrl: "challenge-nanzo",
          href: "/challenge-nanzo",
          icon: <Whatshot />,
          private: false
        },
        {
          title: "Battle",
          id: 6,
          linkUrl: "battle",
          href: "/battle",
          icon: <SportsKabaddi />,
          private: false
        },
        {
          title: "Account",
          id: 7,
          linkUrl: "account",
          href: "/account",
          icon: <AccountBoxIcon />,
          private: true
        },
        {
          title: "Settings",
          id: 8,
          linkUrl: "settings",
          href: "/settings",
          icon: <SettingsIcon />,
          private: true
        },
        {
          title: "Sign out",
          id: 9,
          linkUrl: "sign-out",
          href: "/sign-out",
          icon: <ExitToAppIcon />,
          private: true,
          signOut: true
        },
        {
          title: "Admin",
          id: 10,
          linkUrl: "admin",
          href: "/admin",
          icon: <DashboardIcon />,
          private: true,
          publicOnly: true
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