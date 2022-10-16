import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            {/* search bar */}
            <div className="row">
                {/* input field */}
                <div className="col-11">
                    <div className="position-relative">
                        <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i className="position-absolute wd-search-tuiter bi bi-search"></i>
                    </div>
                </div>
                {/* cog */}
                <div className="col-1 text-primary d-flex align-items-center">
                    <a href="explore-settings.html">
                        <i className="bi bi-gear-fill fs-4 position-relative wd-bottom-3"></i>
                    </a>
                </div>
            </div>
            {/* tabs */}
            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            {/* main content image */}
            <div className="position-relative">
                <img src="../../images/starship.jpg" className="w-100"/>
                    <h2 className="position-absolute text-white bottom-0 ms-2">SpaceX's Starship</h2>
            </div>
            {/* tuits */}
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;