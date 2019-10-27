import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectUserProviders} from '../../../../redux/user/selectors/user.selectors';

import CustomButton from '../../../button/custom-button/custom-button.component'
import {ProviderItemDiv} from'./provider-item.styles';

const ProviderItem = ({name, url, selectUserProviders}) => {
    const onlyOneLeft = selectUserProviders ? selectUserProviders.length === 1 : false;
    const isEnabled = selectUserProviders ? selectUserProviders.includes(url) : false;

    return (
        <ProviderItemDiv >
            {isEnabled 
            ?
                <CustomButton signInMethods isSignInMethodEnabled disabled={onlyOneLeft} > {onlyOneLeft ? name : `Deactivate ${name}`}</CustomButton>
            :
                <CustomButton signInMethods>Link {name}</CustomButton>
            }
            
        </ProviderItemDiv>
        )};

const mapStateToProps = createStructuredSelector ({
    selectUserProviders: selectUserProviders
})    

export default withRouter(connect(mapStateToProps)(ProviderItem));