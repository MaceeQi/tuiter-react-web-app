import React from "react";

const PostSummaryItem = (
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
    return (
        <li className="list-group-item">
            <div className="row">
                {/* words */}
                <div className="col-8">
                    <div className="text-secondary">{post.topic}</div>
                    <div>
                        <span className="fw-bolder">
                            {post.username} <i className="bi bi-patch-check-fill text-primary"></i>
                        </span>
                        <span className="text-secondary"> - {post.time}</span>
                    </div>
                    <div className="fw-bolder">
                        {post.title}
                    </div>
                    <div className="text-secondary">
                        {(post.tweets !== undefined) ? post.tweets : ''}
                    </div>
                </div>
                {/* image */}
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <img className="rounded-3 img-fluid" src={require(`../../images/${post.image}`)}
                         height="100px" width="100px" alt=""/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;