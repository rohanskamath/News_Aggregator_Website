import { useState } from "react";

const Navbar = () => {

    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    

    return (
        <>
            <nav className="navbar p-3 fixed-top" style={{ backgroundColor:"#012970",fontFamily: "Merriweather, sans-serif" }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">News Aggregator</span>
                    <i onClick={handleToggleSideBar} className='bi bi-list toggle-sidebar-btn pe-5 d-sm-block d-md-block d-lg-none'></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar
