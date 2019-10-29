import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectUserProviders} from '../../../../../redux/user/selectors/user.selectors';
import {linkProviderStart} from '../../../../../redux/user/actions/link-provider/start/link-provider-start.action';
import {unlinkProviderStart} from '../../../../../redux/user/actions/unlink-provider/start/unlink-provider-start.action';

import CustomButton from '../../../../page-elements/button/custom-button/custom-button.component'
import {ProviderItemDiv} from'./provider-item.styles';



const ProviderItem = ({name, url, provider, selectUserProviders, linkProvider, unlinkProvider}) => {
    
    const onlyOneLeft = selectUserProviders ? selectUserProviders.length === 1 : false;
    const isEnabled = selectUserProviders ? selectUserProviders.includes(url) : false;

    const handleLinkProvider = event => {
        event.preventDefault();
        linkProvider(provider);
    }

    const handleUnlinkProvider = event => {
        event.preventDefault();
        unlinkProvider(url);
    }

    return (
        <ProviderItemDiv >
            {isEnabled 
            ?
                <CustomButton
                    onClick={handleUnlinkProvider}
                    disabled={onlyOneLeft} 
                    signInMethods 
                    isSignInMethodEnabled 
                    
                >
                    {onlyOneLeft ? name : `Deactivate ${name}`}
                </CustomButton>
            :
                <CustomButton 
                    onClick={handleLinkProvider}
                    signInMethods
                >
                    Link {name}
                </CustomButton>
            }
            
        </ProviderItemDiv>
        )};

const mapStateToProps = createStructuredSelector ({
    selectUserProviders: selectUserProviders
})

const mapDispatchToProps = dispatch => ({
    linkProvider: provider => dispatch(linkProviderStart(provider)),
    unlinkProvider: providerUrl => dispatch(unlinkProviderStart(providerUrl))
  })

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProviderItem));