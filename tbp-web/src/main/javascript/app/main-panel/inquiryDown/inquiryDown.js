/**
 * Created by unrealyan on 16/6/1.
 */
import React from 'react';



const LoanInformation = React.createClass({
    render:function () {
        return (

            <div className="col-lg-10">
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="..."/>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </div>
                </div>
            </div>


        )
    }


});
const  PendingPaymentInformation = React.createClass({
    render:function () {
        return(
            <div className="col-lg-10">
                <div className="input-group">
                    <input type="text" className="form-control" aria-label="..."/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span class="caret"></span></button>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
})

const InquiryDown = React.createClass({
    render:function () {
        return(
            <div>
                <InquiryDwon />
                <LoanInformation />
                <PendingPaymentInformation />
            </div>

        )
    }
})




export default InquiryDown;