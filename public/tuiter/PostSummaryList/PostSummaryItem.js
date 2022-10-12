const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <!-- words -->
                <div class="col-8">
                    <div class="text-secondary">${post.topic}</div>
                    <div>
                        <span class="fw-bolder">
                            ${post.userName} <i class="fa-solid fa-circle-check"></i>
                        </span>
                        <span class="text-secondary"> - ${post.time}</span>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    <div class="text-secondary">
                        ${(post.tweets !== undefined) ? post.tweets : ''}
                    </div>
                </div>
                <!-- image -->
                <div class="col-4">
                    <img class="float-end rounded-3" src="${post.image}" height="100px">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;