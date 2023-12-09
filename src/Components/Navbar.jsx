import React from 'react'

const Navbar = () => {

        function openNav() {
                document.getElementById("navBar").classList.toggle("start-0");
                document.body.classList.toggle("overflow-hidden");
                document.querySelector(".menu").classList.toggle("cross")

        }
        function closeNav() {
                document.getElementById("navBar").classList.remove("start-0");
                document.body.classList.remove("overflow-hidden");
                document.querySelector(".menu").classList.remove("cross")
        }

        const preloader = document.getElementById("preloader");
        setTimeout(() => {
                document.getElementById("preloader").classList.add("d_none")
                document.body.classList.remove("overflow-hidden")

        }, 2000);
        return (
                <div className='overflow-hidden'>
                        <div id="preloader" className=' overflow-y-hidden  position-relative loader_bg '>
                                <div class=" bg-black vh-100 d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 ">
                                        <div class="d-flex align-items-center justify-content-center preloder-img ">
                                                <div class="loading-bar">Loading</div>
                                        </div>
                                </div>
                        </div>
                        <div className="container">
                                <nav className="pt-4">
                                        <div className="d-flex align-items-cneter justify-content-between">
                                                <span className='text-white fs-lg fw-semibold lh-150'>Logo</span>
                                                <div onClick={openNav} className="menu d-block d-lg-none z-5">
                                                        <span className="nav-line1"></span>
                                                        <span className="my-2 nav-line2"></span>
                                                        <span className="nav-line3"></span>
                                                </div>
                                                <ul id="navBar" className="d-flex align-items-center gap-5 mb-0 mobileView">
                                                        <li><a onClick={closeNav} href="#minting"
                                                                className="fs-md fw-medium text-white mb-0 position-relative nav-line minting">Minting</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#roadmap"
                                                                className="fs-md fw-medium text-white mb-0 position-relative nav-line roadmap">Road Map</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#faq"
                                                                className="fs-md fw-medium text-white mb-0 position-relative nav-line faq">Faq</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#team"
                                                                className="fs-md fw-medium text-white mb-0 position-relative nav-line team">Team</a>
                                                        </li>
                                                        <li><a onClick={closeNav} href="#join"
                                                                className="fs-md fw-medium text-white mb-0 position-relative nav-line join">Join Us</a>
                                                        </li>

                                                </ul>
                                        </div>
                                </nav>
                        </div>
                </div>
        )
}

export default Navbar
