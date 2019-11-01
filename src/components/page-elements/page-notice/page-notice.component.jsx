import React from 'react';

import {PageNoticeContainer} from './page-notice.styles';

const PageNotice = ({notice}) => {
    console.log(notice);
    if (!notice) return null;

    return (
        <PageNoticeContainer>
            {notice}
        </PageNoticeContainer>
    )
}

export default PageNotice;
