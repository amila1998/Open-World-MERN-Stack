mport React from 'react'

export default function Header() {
    return (
        <div className="container" id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                    {/*<li class="nav-item">
                        <a className="nav-link" href="/FFMM">Form List</a>
                    </li>*/}

                    <li class="nav-item">
                        <a className="nav-link" href="/FFMM1">Destination(Admin)</a>
                    </li>

                    {/*<li class="nav-item">
                        <a className="nav-link" href="/Map">Map</a>
                    </li>*/}

                    <li class="nav-item">
                        <a className="nav-link" href="/">HomeScreen(User)</a>
                    </li>

                    <li class="nav-item">
                        <a className="nav-link" href="/ImageSlider">ImageSlider</a>
                    </li>

                    {/*<li class="nav-item">
                        <a className="nav-link" href="/DestinationVideo">DestinationVideo</a>
                    </li>*/}

                    <li class="nav-item">
                        <a className="nav-link" href="/Map_admin">Map_admin</a>
                    </li>

                    <li class="nav-item">
                        <a className="nav-link" href="/Map_cus">Map_cus</a>
                    </li>

                    <li class="nav-item">
                        <a className="nav-link" href="/print">print</a>
                    </li>

                    </ul>
            </div>
            </nav>
        </div>
    )
}
