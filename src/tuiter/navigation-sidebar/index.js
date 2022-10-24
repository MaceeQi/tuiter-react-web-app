import React from "react";
import "./index.css";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div>
            <div className="list-group">
                {/* Tuiter */}
                <a href="#" className="list-group-item list-group-item-action">
                    <i className="bi bi-twitter"></i>
                </a>

                {/* Home */}
                <Link to="/tuiter/home" className={`list-group-item list-group-item-action
                               ${(active === 'home' || active === '' || active === undefined) ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-house-door-fill"></i>
                        <span className="d-none d-xl-block ms-1">Home</span>
                    </span>
                </Link>

                {/* Explore */}
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action 
                               ${(active === 'explore') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-hash"></i>
                        <span className="d-none d-xl-block ms-1">Explore</span>
                    </span>
                </Link>

                {/* Labs */}
                <Link to="/" className="list-group-item list-group-item-action">
                    <span className="d-flex align-items-center">
                        <i className="bi bi-clipboard-fill"></i>
                        <span className="d-none d-xl-block ms-1">Lab</span>
                    </span>
                </Link>

                {/* Notifications */}
                <a href="#" className={`list-group-item list-group-item-action
                              ${(active === 'notifications') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-bell-fill"></i>
                        <span className="d-none d-xl-block ms-1">Notifications</span>
                    </span>
                </a>

                {/* Messages */}
                <a href="#" className={`list-group-item list-group-item-action
                              ${(active === 'messages') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-envelope-fill"></i>
                        <span className="d-none d-xl-block ms-1">Messages</span>
                    </span>
                </a>

                {/* Bookmarks */}
                <a href="#" className={`list-group-item list-group-item-action
                              ${(active === 'bookmarks') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-bookmark-fill"></i>
                        <span className="d-none d-xl-block ms-1">Bookmarks</span>
                    </span>
                </a>

                {/* Lists */}
                <a href="#" className={`list-group-item list-group-item-action
                              ${(active === 'lists') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-list-ul"></i>
                        <span className="d-none d-xl-block ms-1">Lists</span>
                    </span>
                </a>

                {/* Profile */}
                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action
                              ${(active === 'profile' || active === 'edit-profile') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <i className="bi bi-person-fill"></i>
                        <span className="d-none d-xl-block ms-1">Profile</span>
                    </span>
                </Link>

                {/* More */}
                <a href="#" className={`list-group-item list-group-item-action ps-2
                              ${(active === 'more') ? 'active' : ''}`}>
                    <span className="d-flex align-items-center">
                        <span className="position-relative ms-2">
                            <i className="bi bi-circle-fill"></i>
                            <i className="bi bi-three-dots text-black position-absolute wd-nudge-left"></i>
                        </span>
                        <span className="d-none d-xl-block ps-1">
                            More
                        </span>
                    </span>
                </a>
            </div>

            <button className="btn btn-primary rounded-pill w-100 mt-2">
                Tuit
            </button>
        </div>
    );
};
export default NavigationSidebar;