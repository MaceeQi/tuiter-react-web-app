import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);

    return(
        <>
            {/* Profile Header */}
            <div className="row">
                <div className="col-1 d-flex align-items-center">
                    <i className="bi bi-arrow-left-short fs-4"></i>
                </div>
                <div className="col ps-4">
                    <div className="row fw-bold fs-5 text-white">
                        {profile.firstName} {profile.lastName}
                    </div>
                    <div className="row">
                        {profile.tuits} Tuits
                    </div>
                </div>
            </div>

            {/* Banner and Profile Photo */}
            <div className="row pt-2 mb-4 position-relative">
                {/* banner image */}
                <img src={require(`../../images/${profile.bannerPicture}`)}
                     className="wd-banner-size" alt=""/>

                {/* profile photo */}
                <div className="position-absolute bottom-0 start-0">
                    <div className="ps-2">
                        <img src={require(`../../images/${profile.profilePicture}`)}
                             className="wd-circle-avatar-big position-relative" alt=""/>
                    </div>
                </div>

                {/* edit profile button */}
                <div className="w-100 float-end mb-3">
                    <Link to="/tuiter/edit-profile"
                          className="list-group-item list-group-item-action">
                        <button className="btn btn-light rounded-pill m-2 float-end">
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>

            {/* Profile Name and Handle */}
            <div>
                <div className="fw-bold fs-5 text-white pb-0 mb-0">
                    {profile.firstName} {profile.lastName}
                </div>
                <div>
                    {profile.handle}
                </div>
            </div>

            {/* Bio */}
            <div className="pt-3 text-white">
                <p>
                    {profile.bio}
                </p>
            </div>

            {/* Location, Birthdate, Joined */}
            <div className="d-flex justify-content-between pe-1">
                <span><i className="bi bi-geo-alt pe-2"></i>{profile.location}</span>
                <span><i className="bi bi-balloon pe-2"></i>{profile.dateOfBirth}</span>
                <span><i className="bi bi-calendar3 pe-2"></i>Joined {profile.dateJoined}</span>
            </div>

            {/* Followers/Following */}
            <div className="pt-3">
                <span className="me-5">
                    <span className="me-2 fw-bold text-white">{profile.followingCount}</span>Following
                </span>
                <span>
                    <span className="me-2 fw-bold text-white">{profile.followersCount}</span>Followers
                </span>
            </div>
        </>
    );
};
export default ProfileComponent;