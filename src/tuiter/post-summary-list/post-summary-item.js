import React from "react";

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg"
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
                            {post.userName} <i className="bi bi-check-circle-fill"></i>
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
                <div className="col-4">
                    <img className="float-end rounded-3" src={`../../images/${post.image}`} height="100px"/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;