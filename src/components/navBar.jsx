function NavBar() {
    return (
        <nav className="navbar">
            <img src="/home-logo.png" alt="movix logo" />
            <input type="search" placeholder="What do you want to watch?" />
            <div className="profile">
                <p>Hi, $Fullname</p>
                <img src="/Menu.png" alt="menu" />
            </div>
        </nav>
    );
}
export default NavBar;