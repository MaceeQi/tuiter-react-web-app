import React from "react";
import "./index.css";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item d-flex bg-transparent border-secondary p-3">
            {/* avatar image */}
            <div className="pe-3">
                <img className="wd-circle-avatar" src={require(`../../images/${post.image}`)} alt=""/>
            </div>
            {/* post content */}
            <div className="w-100">
                <div>
                    <span className="fw-bolder">
                        {post.userName} <i className="bi bi-patch-check-fill text-primary"></i>
                    </span>
                    <span className="text-secondary ps-2">
                         {post.handle} • {post.time}
                    </span>
                    <span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </span>
                </div>
                <div>
                    {post.tuit}
                </div>
                {/* icons */}
                <div className="text-secondary d-flex justify-content-between mt-3 pe-5">
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;