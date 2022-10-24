import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    // Retrieve state from the store
    const whoArray = useSelector((state) => state.who);

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