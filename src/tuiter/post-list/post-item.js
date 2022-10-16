import React from "react";
import "./index.css";

const PostItem = (
    {
        post = {
            "avatar": "elon-profile.jpg",
            "name": "Elon Musk",
            "username": "@elonmusk",
            "time": "23h",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "image": "inspiration4.jpg",
            "article": true,
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "articleContent": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
            "link": "netflix.com",
            "comments": "4.2k",
            "retuits": "3.5k",
            "likes": "37.5k"
        }
    }
) => {
    return (
        <li className="list-group-item d-flex bg-transparent border-secondary p-3">
            {/* avatar image */}
            <div className="pe-3">
                <img className="wd-circle-avatar" src={`../../images/${post.avatar}`}/>
            </div>
            {/* post content */}
            <div className="w-100">
                <div>
                    <span className="fw-bolder">
                        {post.name} <i className="bi bi-check-circle-fill"></i>
                    </span>
                    <span className="text-secondary ps-1">
                         {post.username} • {post.time}
                    </span>
                </div>
                <div>
                    {post.tuit}
                </div>
                {/* article */}
                <div className="mt-3">
                    {/* article photo */}
                    <div className="border border-1 border-secondary wd-rounded-20">
                        <img className={`img-fluid
                                    ${post.article ? "border-bottom wd-rounded-corners-top" : "wd-rounded-20"}
                                    border-secondary border-1`}
                             src={`../../images/${post.image}`}/>

                        {/* article content */}
                        <div className={`${post.article ? "p-3" : ""}`}>
                            {post.title}
                            <div className="text-secondary">
                                {post.articleContent}
                            </div>
                            <div className="text-secondary">
                                <i className={`${post.article ? "bi bi-link-45deg" : ""}`}></i> {post.link}
                            </div>
                        </div>
                    </div>
                </div>
                {/* icons */}
                <div className="text-secondary d-flex justify-content-between mt-3 pe-5">
                    <div>
                        <span>
                            <i className="bi bi-chat"></i>
                        </span>
                        <span className="ms-2">
                            {post.comments}
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
                            <i className="bi bi-heart"></i>
                        </span>
                        <span className="ms-2">
                            {post.likes}
                        </span>
                    </div>
                    <div>
                        <i className="bi bi-upload"></i>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;