import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            {/* title */}
            <li className="list-group-item">
                <span className="fw-bolder">Who to follow</span>
            </li>

            {/* profiles */}
            {
                whoArray.map(profile => <WhoToFollowListItem who={profile}/>)
            }
        </ul>
    );
};
export default WhoToFollowList;