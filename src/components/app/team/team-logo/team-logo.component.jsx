import React from "react";

import {LogoImage} from './team-logo.styles';

const TeamLogo = ({teamData}) => {
    return (teamData.map(({id, logo}) => {
        return (<LogoImage key={id} src={logo} alt='logo' /> )}))};

export default TeamLogo;
