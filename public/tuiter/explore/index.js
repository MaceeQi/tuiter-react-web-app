// Create the JavaScript implementation of the explore screen here

/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <h2>Explore</h2>
        <div class="row mt-2">
            <!-- Navigation Sidebar -->
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                ${NavigationSidebar("explore")}
            </div>
            <!-- Explore Component -->
            <div class="col-10 col-lg-7 col-xl-6">
                ${ExploreComponent()}
            </div>
            <!-- Who To Follow List -->
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
}
$(exploreComponent);