import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectUserProviders} from '../../../../redux/user/selectors/user.selectors';
import {linkProviderStart} from '../../../../redux/user/actions/link-provider/link-provider-start.action';

import CustomButton from '../../../button/custom-button/custom-button.component'
import {ProviderItemDiv} from'./provider-item.styles';



const ProviderItem = ({name, url, provider, selectUserProviders, linkProvider}) => {
    
    const onlyOneLeft = selectUserProviders ? selectUserProviders.length === 1 : false;
    const isEnabled = selectUserProviders ? selectUserProviders.includes(url) : false;

    const handleLinkProvider = event => {
        event.preventDefault();
        linkProvider(provider);
    }

    return (
        <ProviderItemDiv >
            {isEnabled 
            ?
                <CustomButton
                    // onClick={unlinkProvider}
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
    linkProvider: provider => dispatch(linkProviderStart(provider))
  })

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProviderItem));