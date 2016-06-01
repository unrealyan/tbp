import React from 'react';
import OrgLogo from './org-logo/org-logo';
import SideBarHandle from './top-navigator/side-bar-handle';
import Hy from './top-right/top-right';
const TopBar = () => (
    <div id="top" className="clearfix">
        <OrgLogo />
        <SideBarHandle />
        <Hy />
    </div>
);


export default TopBar;