import React from "react";
import "./index.css";

const WhoToFollowListItem = (
    {
        who = {avatarIcon: 'nasa-logo.png', userName: 'NASA', handle: 'NASA'}
    }
) => {
    /* Profile */
    return (
        <li className="list-group-item">
            <div className="row">
                {/* avatar image */}
                <div className="col-2">
                    <img className="wd-circle-avatar" src={`../../images/${who.avatarIcon}`}/>
                </div>

                {/* name */}
                <div className="col-7">
                    <div className="fw-bolder">
                        {who.userName} <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <div>
                        @{who.handle}
                    </div>
                </div>

                {/* follow button */}
                <div className="col-3 d-flex align-items-center ps-0">
                    <button className="btn btn-primary rounded-pill wd-follow-button-width">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;