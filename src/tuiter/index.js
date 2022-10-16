import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./post-list";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return(
        <div className="row mt-2">
            {/* 1st Column - Navigation Sidebar */}
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            {/* 2nd Column - Main Component */}
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            {/* 3rd Column - Who To Follow or Post Summary List*/}
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <Routes>
                    <Route path="home" element={<PostSummaryList/>}/>
                    <Route path="explore" element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>
    );
}
export default Tuiter