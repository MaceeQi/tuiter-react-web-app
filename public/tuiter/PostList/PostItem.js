const PostItem = (post) => {
    return(`
        <li class="list-group-item d-flex bg-transparent border-secondary p-3">
            <!-- avatar image -->
            <div class="pe-3">
                <img class="wd-circle-avatar" src="${post.avatar}"/>
            </div>
            <!-- post content -->
            <div class="w-100">
                <div>
                    <span class="fw-bolder">
                        ${post.name} <i class="fa-solid fa-circle-check"></i>
                    </span>
                    <span class="text-secondary ps-1">
                         ${post.username} • ${post.time}
                    </span>
                </div>
                <div>
                    ${post.tuit}
                </div>
                <!-- article -->
                <div class="mt-3">
                    <!-- article photo -->
                    <div class="border border-1 border-secondary wd-rounded-20">
                        <img class="img-fluid
                                    ${post.article ? "border-bottom wd-rounded-corners-top" : "wd-rounded-20"} 
                                    border-secondary border-1" 
                             src="${post.image}"/>
                    
                        <!-- article content -->
                        <div class=${post.article ? "p-3" : ""}>
                            ${post.title}
                            <div class="text-secondary">
                                ${post.articleContent}
                            </div>
                            <div class="text-secondary">
                                ${post.link}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- icons -->
                <div class="text-secondary d-flex justify-content-between mt-3 pe-5">
                    <div>
                        <span>
                            <i class="fa-regular fa-comment"></i>
                        </span>
                        <span class="ms-2">
                            ${post.comments}
                        </span>
                    </div>
                    <div>
                        <span>
                            <i class="fa-solid fa-retweet"></i>
                        </span>
                        <span class="ms-2">
                            ${post.retuits}
                        </span>
                    </div>
                    <div>
                        <span>
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <span class="ms-2">
                            ${post.likes}
                        </span>
                    </div>
                    <div>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostItem;