import React from "react";

const TeamLogo = ({teamData}) => {
            return (
                teamData.map(({id, logo}) => {
                    return (
                        <img key={id} src={logo} alt='logo' className='team__logo'/>
                    )
                })
            )
                
            

        };

export default TeamLogo;
