import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import {createTuit} from "../tuits/tuits-reducer";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit))
    }

    return (
        <div className="row">
            {/* Avatar */}
            <div className="col-auto">
                <img src="../../images/nasa-logo.png" className="wd-circle-avatar"/>
            </div>

            {/* Create New Tuit */}
            <div className="col-10">
                {/* New tuit body */}
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          className="form-control border-0 bg-black text-white"
                          onChange={(event) =>
                              setWhatsHappening(event.target.value)}>
                </textarea>

                <div className="d-flex justify-content-between align-items-center pt-2">
                    {/* Icons - media, gifs, stickers, location, etc. */}
                    <div className="text-primary fs-5">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>

                    {/* Tuit button */}
                    <button className="rounded-pill btn btn-primary fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
};
export default WhatsHappening;