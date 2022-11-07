import React from "react";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile";
import profileReducer from "./reducers/profile-reducer";

// Configure the store
const store = configureStore({
    reducer: {
        who: whoReducer,
        tuitsData: tuitsReducer,
        profile: profileReducer}
});

function Tuiter() {
    // Provide the store to rest of app so it can pull from the global state
    return(
        <Provider store={store}>
            <div className="row mt-2">
                {/* 1st Column - Navigation Sidebar */}
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                {/* 2nd Column - Main Component */}
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                {/* 3rd Column - Who To Follow or Post Summary List*/}
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter