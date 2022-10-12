import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <!-- search bar -->
        <div class="row">
            <!-- input field -->
            <div class="col-11">
                <div class="position-relative">
                    <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i class="position-absolute wd-search-tuiter-light fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <!-- cog -->
            <div class="col-1 text-primary d-flex align-items-center">
                <a href="explore-settings.html">
                    <i class="fa-solid fa-gear fa-xl"></i>
                </a>
            </div>
        </div>
        <!-- tabs -->
        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- main content image -->
        <div class="position-relative">
            <img class="w-100" src="../../images/starship.jpg">
            <h2 class="position-absolute text-white bottom-0 ms-2">SpaceX's Starship</h2>
        </div>
        <!-- tuits -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
