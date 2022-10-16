import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <!-- title -->
            <li class="list-group-item">
                <span class="fw-bolder">Who to follow</span>
            </li>
            <!-- profiles -->
            ${who.map(profile => {
                return (WhoToFollowListItem(profile));
                }).join('')
            }  
        </ul>
    `);
}
export default WhoToFollowList;

