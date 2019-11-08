import React from 'react';
import Button from '@material-ui/core/Button';

import {useStyles, TypographyHeader, HeaderRow, VersusAvatar} from './splash-entry.styles';

const SplashEntry = ({image, entrantType, buttonClass, points}) => {
    
    const classes = useStyles();

    return (
        <HeaderRow>
            <VersusAvatar alt='Avatar' src={image} className={classes.bigAvatar}/>
                <TypographyHeader variant="h1" component="h2">
                    {entrantType === 'opponent' ? entrantType : 'You'}
                </TypographyHeader>
            <Button variant="outlined" color='primary' className={buttonClass}>
                <TypographyHeader variant="h1" component="h2">{points}</TypographyHeader>
            </Button>      
        </HeaderRow>

        )
    
}

export default SplashEntry;

