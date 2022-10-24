import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {editProfile} from "../reducers/profile-reducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);

    const [profileInfo, setProfileInfo] = useState({
        firstName: profile.firstName,
        lastName: profile.lastName,
        bio: profile.bio,
        website: profile.website,
        location: profile.location,
        birthdate: profile.dateOfBirth
    });
    const dispatch = useDispatch();

    const saveProfileClickHandler = () => {
        dispatch(editProfile(profileInfo));
    }

    const firstNameChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            firstName: event.target.value
        });
    }

    const lastNameChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            lastName: event.target.value
        });
    }

    const bioChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            bio: event.target.value
        });
    }

    const websiteChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            website: event.target.value
        });
    }

    const locationChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            location: event.target.value
        });
    }

    const birthdateChangeHandler = (event) => {
        setProfileInfo({
            ...profileInfo,
            birthdate: event.target.value
        });
    }

    return (
        <>
            {/* Edit Profile Header + Save Button */}
            <div className="row">
                <div className="col-1 d-flex align-items-center">
                    <Link to="/tuiter/profile" className="list-group-item-action">
                        <i className="bi bi-x fs-4"></i>
                    </Link>
                </div>
                <div className="col ps-5 fw-bold fs-5 text-white d-flex align-items-center">
                    Edit Profile
                </div>
                <div className="col d-flex justify-content-end m-2">
                    <Link to="/tuiter/profile" onClick={saveProfileClickHandler}
                            className="btn btn-light rounded-pill fw-bold ps-4 pe-4">
                        Save
                    </Link>
                </div>
            </div>

            {/* Banner and Profile Photo */}
            <div className="row pt-2 position-relative">
                {/* Banner */}
                <img src={require(`../../images/${profile.bannerPicture}`)}
                     className="wd-banner-size" alt=""/>

                {/* Profile pic */}
                <div className="position-relative wd-nudge-up-50">
                    <div className="ps-2">
                        <img src={require(`../../images/${profile.profilePicture}`)}
                             className="wd-circle-avatar-big" alt=""/>
                    </div>
                </div>
            </div>

            {/* Edit Name */}
            <div className="row">
                <div className="col">
                    <form class="form-floating">
                        <input onChange={firstNameChangeHandler}
                               value={profileInfo.firstName}
                               className="form-control bg-light text-white"/>
                        <label className="text-white">
                            First Name
                        </label>
                    </form>
                </div>
                <div className="col">
                    <form className="form-floating">
                        <input onChange={lastNameChangeHandler}
                               value={profileInfo.lastName}
                               className="form-control bg-light text-white"/>
                        <label className="text-white">
                            Last Name
                        </label>
                    </form>
                </div>
            </div>

            {/* Edit Bio */}
            <div className="mt-4">
                <form className="form-floating">
                    <textarea onChange={bioChangeHandler}
                              value={profileInfo.bio}
                              className="form-control h-100 bg-light text-white"
                              rows="5"/>
                    <label className="text-white">
                        Bio
                    </label>
                </form>
            </div>

            {/* Edit Location */}
            <div className="mt-4">
                <form className="form-floating">
                    <input onChange={locationChangeHandler}
                              value={profileInfo.location}
                              className="form-control h-100 bg-light text-white"/>
                    <label className="text-white">
                        Location
                    </label>
                </form>
            </div>

            {/* Edit Website */}
            <div className="mt-4">
                <form className="form-floating">
                    <input onChange={websiteChangeHandler}
                           value={profileInfo.website}
                           className="form-control h-100 bg-light text-white"/>
                    <label className="text-white">
                        Website
                    </label>
                </form>
            </div>

            {/* Edit Birthdate */}
            <div className="mt-4">
                <form className="form-floating">
                    <input onChange={birthdateChangeHandler}
                           value={profileInfo.birthdate}
                           className="form-control h-100 bg-light text-white"/>
                    <label className="text-white">
                        Birthdate
                    </label>
                </form>
            </div>
        </>
    );
};
export default EditProfile;