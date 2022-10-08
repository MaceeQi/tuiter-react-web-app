const WhoToFollowListItem = (who) => {
    return(`
        <!-- profile -->
        <li class="list-group-item">
            <div class="row">
                <!-- avatar image -->
                <div class="col-2">
                    <img class="wd-circle-avatar" src="${who.avatarIcon}">
                </div>
                <!-- name -->
                <div class="col-7">
                    <div class="fw-bolder">
                        ${who.userName} <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>
                        @${who.userHandle}
                    </div>
                </div>
                <!-- follow button -->
                <div class="col-3 d-flex align-items-center ps-0">
                    <button class="btn btn-primary rounded-pill wd-follow-button-width">Follow</button>
                </div>
            </div>
        </li>            
    `);
}
export default WhoToFollowListItem;