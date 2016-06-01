import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
const TopRight1=()=>{

	return(
		<div className="top-right">
			您好:<a href="#">Transbank&nbsp;</a>
			<div className="btn-group">
				<button type="button" className="btn btn-info dropdown-toggle"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>通知中心&nbsp;</span>
					<span className="badge">42</span>
				</button>
				<ul className="">
					<li><a href="#">每日通知</a></li>
					<li><a href="#">新增报名</a></li>
					<li><a href="#">新增放款</a></li>
					<li><a href="#">放款失败</a></li>

				</ul>
			</div>

		</div>
	)
};
const TopRight = React.createClass({
	style:{
		float:'right',
		color:'#555'
	},
	getInitialState:function () {
		return{
			NoticeList:false
		}
	},
	onClickNotice:function () {
		this.setState.NoticeList=""
	},
	render:function(){
		return(
				<div className="top-right">
						<UserCenter callbackParent={this.props.onClickNotice}/>
						<NoticeList display={this.state.NoticeList}/>
				</div>
		)

	}
});
const UserCenter = React.createClass({
	getInitialState:function () {
		return{
			userName:'Transbank'
		}
	},
	getDefaultProps:function () {

	},
	style:{
		fontSize:'18px'
	},
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
			<div style={this.style} >
				您好:<a >{this.state.userName}&nbsp;</a>
				<span className="btn btn-info" onClick={this.handlerClick}>通知中心&nbsp;<span className="badge">16</span></span>
				<div className="list-group" style={{display:'none',width:'80%',position:'relative',right:'0px',fontSize:'16px'}}  ref="tip">
					<a href="#" className="list-group-item"><span style={{color:'#555'}}>每日通知&nbsp;<span className="badge">4</span></span></a>
					<a href="#" className="list-group-item"><span style={{color:'#555'}}>新增报名&nbsp;<span className="badge">4</span></span></a>
					<a href="#" className="list-group-item"><span style={{color:'#555'}}>新增放款&nbsp;<span className="badge">4</span></span></a>
					<a href="#" className="list-group-item"><span style={{color:'#555'}}>放款失败&nbsp;<span className="badge">4</span></span></a>
				</div>
			</div>

		)
	}
});
const NoticeList = React.createClass({

	getInitialState:function () {
		return{
			display:false
		}
	},
	style:{
		color:'#555'
	},
	divStyle:{
		float:'right',
		display:'none'
	},

	render:function () {
		
		return(
			<div className="list-group hidden" style={this.divStyle}>
				<a href="#" className="list-group-item"><span style={this.style}>每日通知&nbsp;<span className="badge">4</span></span></a>
				<a href="#" className="list-group-item"><span style={this.style}>新增报名&nbsp;<span className="badge">4</span></span></a>
				<a href="#" className="list-group-item"><span style={this.style}>新增放款&nbsp;<span className="badge">4</span></span></a>
				<a href="#" className="list-group-item"><span style={this.style}>放款失败&nbsp;<span className="badge">4</span></span></a>
			</div>
		)
	}
})
export default TopRight; 