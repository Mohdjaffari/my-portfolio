import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="navbar-container" id='navbar-container-ss' >
                <div className="nav-content" id='nav-content-ss'>
                    {/* logo creative */}
                    <div className="nav-logo" id='nav-logo-ss'>
                    <i className="fa-brands fa-slack"></i>
                        {/* toggel btn show here */}
                        <span><a href="/"><i className="fa-solid fa-bars-staggered"></i></a></span>
                        <h1>
                            M.jaffari
                        </h1>
                    </div>
                    {/* nav links start */}
                    <ul>
                        <li id='li1'><a href="/">Home</a></li>
                        <li id='li2'><a href="/">About</a></li>
                        <li id='li3'><a href="/">Projects</a></li>
                        <li id='li4'><a href="/">Blogs</a></li>
                        <li id='li5'><a href="/">Contact</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    </div>
  )
}
