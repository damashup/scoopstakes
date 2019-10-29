import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import ProviderItem from './provider-item/provider-item.component';

import {selectSignInMethodsProviders} from '../../../../redux/sign-in-methods/sign-in-methods.selectors'

import {
        LinkAccountsDiv,
        LinkAccountsSectionHeader   
        } from './link-accounts.styles';


const LinkAccountsSection = ({signInMethods}) => {
    return (
           <LinkAccountsDiv>
                <LinkAccountsSectionHeader>Link Accounts</LinkAccountsSectionHeader>
                {signInMethods.map(({id, ...otherMethodProps}) => (
                <ProviderItem key={id} {...otherMethodProps} />)
                )}
           </LinkAccountsDiv>
    )}

const mapStateToProps = createStructuredSelector({
    signInMethods: selectSignInMethodsProviders,
});
  
export default connect(mapStateToProps)(LinkAccountsSection)