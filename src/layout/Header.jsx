function Header() {
    return (
        <div>
            <nav className="#5e35b1 deep-purple darken-1">
                <div className="nav-wrapper ">
                    <a href="/src/layout/Main.jsx" 
                    className="brand-logo">
                        CINEMA
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="collapsible.html">REPO</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export { Header }