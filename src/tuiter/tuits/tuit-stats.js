import React from "react";

const TuitStats = (
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
    return(
        <>
            <div>
                <span>
                    <i className="bi bi-chat"></i>
                </span>
                <span className="ms-2">
                    {post.replies}
                </span>
            </div>
            <div>
                <span className="position-relative">
                    <span className="position-absolute wd-nudge-up">
                        <i className="bi bi-arrow-90deg-right"></i>
                    </span>
                    <span className=" position-absolute wd-nudge-down">
                        <i className="bi bi-arrow-return-left"></i>
                    </span>
                </span>
                <span className="ms-4">
                    {post.retuits}
                </span>
            </div>
            <div>
                <span>
                    <i className={`bi ${post.liked ? 'bi-heart-fill text-danger' : 'bi-heart'}`}></i>
                </span>
                <span className="ms-2">
                    {post.likes}
                </span>
            </div>
            <div>
                <i className="bi bi-upload"></i>
            </div>
        </>
    );
};
export default TuitStats;