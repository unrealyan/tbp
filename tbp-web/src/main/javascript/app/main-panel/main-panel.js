import React from 'react';

import { Location, Locations } from 'react-router-component';

import SystemSetting from './system-setting/system-setting';
import Dashboard from './dashboard/dashboard';
import InquiryDown from './inquiryDown/InquiryDown';
import {WorkCenter,CashFlow,PropertyOverview,Inquiry,AssetAnalysis,ReportDown} from '../side-bar/side-bar';
const MainPanel = () => (
    <div className="content">
        <Locations>
          <Location path="/" handler={WorkCenter} />
          <Location path="/view/workcenter(/*)" handler={WorkCenter} />
          <Location path="/view/PropertyOverview(/*)" handler={PropertyOverview} />
            <Location path="/view/PropertyOverview(/*)" handler={CashFlow} />
          <Location path="/view/Inquiry(/*)" handler={Inquiry} />
            <Location path="/view/Inquiry(/*)" handler={AssetAnalysis} />
            <Location path="/view/Inquiry(/*)" handler={ReportDown} />
        </Locations>
    </div>
);

export default MainPanel;