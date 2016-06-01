import React, { PropTypes } from 'react';
import { Link } from 'react-router-component';
import classNames from 'classnames';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
const SideBar = ({showSideBar}) => {
    var sideBarClass = classNames({sidebar: true, clearfix: true, hidden: !showSideBar});
    return <div className={sideBarClass}>
        <ul className="sidebar-panel nav">
            <li className="sidetitle">操作中心</li>
            <WorkCenter/>
            <PropertyOverview/>
            <CashFlow/>
            <Inquiry />
            <AssetAnalysis />
            <ReportDown />
        </ul>
    </div>
};
const WorkCenter = React.createClass({
    handlerClick:function (event) {
        var tip=ReactDOM.findDOMNode(this.refs.tip);
        if(tip.style.display==='none'){
            tip.style.display='block'
        }else{
            tip.style.display='none'
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>工作台</div>
                        <span className="label label-default">2</span>
                    </Link>
                    <div ref="tip" style={{display:'none'}}>
                        <Link href="/view/workcenter/">
                            <span >
                            </span>发起放款录入
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>变更还款计划
                        <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>发起尽职调查
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>发起信托计划
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>发起资管计划
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>新增资金
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>待处理工单
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>新增操作员
                            <span className="label label-default">2</span>
                        </Link>
                    </div>
                </li>
            </div>
        )
    }

});

const PropertyOverview = React.createClass({
    handlerClick:function (event) {
        var tip=ReactDOM.findDOMNode(this.refs.tip);
        if(tip.style.display==='none'){
            tip.style.display='block'
        }else{
            tip.style.display='none'
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>资产概况</div>
                        <span className="label label-default">2</span>
                    </Link>
                    <div ref="tip" style={{display:'none'}}>
                        <Link href="/view/workcenter/">
                            <span >
                            </span>信托计划切换
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>客户数|资产总规模
                            <span className="label label-default">2</span>
                        </Link>

                    </div>
                </li>
            </div>
        )
    }

});

const CashFlow = React.createClass({
    handlerClick:function (event) {
        var tip=ReactDOM.findDOMNode(this.refs.tip);
        if(tip.style.display==='none'){
            tip.style.display='block'
        }else{
            tip.style.display='none'
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>现金流情况</div>
                        <span className="label label-default">2</span>
                    </Link>
                    <div ref="tip" style={{display:'none'}}>

                        <Link href="/view/workcenter/">
                            <span>
                            </span>现金流情况
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>逾期天数分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>逾期率分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>资产分布
                            <span className="label label-default">2</span>
                        </Link>
                    </div>
                </li>
            </div>
        )
    }
})
const Inquiry = React.createClass({
    handlerClick:function (event) {
        var tip=ReactDOM.findDOMNode(this.refs.tip);
        if(tip.style.display==='none'){
            tip.style.display='block'
        }else{
            tip.style.display='none'
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>查询与下载</div>
                        <span className="label label-default">2</span>
                    </Link>
                    <div ref="tip" style={{display:'none'}}>
                        <Link href="/view/workcenter/">
                            <span >
                            </span>待放款信息
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>待还款信息
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>还款流水查询
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>支用查询
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>客户信息查询
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>逾期查询
                            <span className="label label-default">2</span>
                        </Link>
                    </div>
                </li>
            </div>
        )
    }

});
const AssetAnalysis = React.createClass({
    handlerClick:function (event) {
        var tip=ReactDOM.findDOMNode(this.refs.tip);
        if(tip.style.display==='none'){
            tip.style.display='block'
        }else{
            tip.style.display='none'
        }
        event.stopPropagation();
        event.preventDefault();
    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>资产分析</div>
                        <span className="label label-default">2</span>
                    </Link>
                    <div ref="tip" style={{display:'none'}}>
                        <Link href="/view/workcenter/">
                            <span >
                            </span>逾期天数分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>不良率变化
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>金额分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>资产未来现金流
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>资产迁移矩阵
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>异常还款金额，时间分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>代偿还款金额，时间分布
                            <span className="label label-default">2</span>
                        </Link>
                        <Link href="/view/workcenter/">
                            <span>
                            </span>不良区域分布
                            <span className="label label-default">2</span>
                        </Link>

                    </div>
                </li>
            </div>
        )
    }

});
const ReportDown = React.createClass({
    handlerClick:function (event) {

    },
    render:function () {
        return(
            <div>
                <li>
                    <Link href="/view/workcenter/">
                        <span className="icon color5">
                         <i className="fa fa-bank"> </i>
                        </span><div onClick={this.handlerClick}>报表下载</div>
                        <span className="label label-default">2</span>
                    </Link>
                </li>
            </div>
        )
    }

});
SideBar.propTypes = {
    showSideBar: PropTypes.bool.isRequired
};

const mapStateToProps = (state) =>
    ({showSideBar: state.main.showSideBar});

const SideBarWrapper = connect(
  mapStateToProps,
  null
)(SideBar);
export {WorkCenter,CashFlow,PropertyOverview,Inquiry,AssetAnalysis,ReportDown};
export default SideBarWrapper;