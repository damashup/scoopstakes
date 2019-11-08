import React from "react";

import {TeamLogoAvatar} from './team-avatar.styles';

const TeamAvatar = ({teamData}) => {
    const logoUrl = teamData[0] ? teamData[0].logo : null;

    return (
        <TeamLogoAvatar alt="logo" src={logoUrl} />
    )}

export default TeamAvatar;
