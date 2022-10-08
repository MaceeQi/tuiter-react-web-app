const NavigationSidebar = () => {
    return(`
        <div class="list-group">
            <!-- Twitter -->
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <!-- Home -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-house-chimney"></i>
                    <span class="d-none d-xl-block ms-1">Home</span>
                </span>
            </a>
            <!-- Explore -->
            <a href="#" class="list-group-item list-group-item-action active">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-hashtag"></i>
                    <span class="d-none d-xl-block ms-1">Explore</span>
                </span>
            </a>
            <!-- Notifications -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-bell"></i>
                    <span class="d-none d-xl-block ms-1">Notifications</span>
                </span>
            </a>
            <!-- Messages -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-envelope"></i>
                    <span class="d-none d-xl-block ms-1">Messages</span>
                </span>
            </a>
            <!-- Bookmarks -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-bookmark"></i>
                    <span class="d-none d-xl-block ms-1">Bookmarks</span>
                </span>
            </a>
            <!-- Lists -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-list"></i>
                    <span class="d-none d-xl-block ms-1">Lists</span>
                </span>
            </a>
            <!-- Profile -->
            <a href="#" class="list-group-item list-group-item-action">
                <span class="d-flex align-items-center">
                    <i class="fa-solid fa-user"></i>
                    <span class="d-none d-xl-block ms-1">Profile</span>
                </span>
            </a>
            <!-- More -->
            <a href="#" class="list-group-item list-group-item-action ps-2">
                <span class="d-flex align-items-center">
                    <span class="fa-stack wd-width-more">
                    <i class="fa-solid fa-circle fa-stack-1x"></i>
                    <i class="fa-solid fa-ellipsis fa-stack-1x text-black"></i>
                    </span>
                    <span class="d-none d-xl-block">More</span>
                </span>
            </a>
        </div>
        <button class="btn btn-primary rounded-pill w-100 mt-2">
            Tuit
        </button>
    `);
}
export default NavigationSidebar;