"use client"
import { useEffect, useRef, useState } from 'react';
import { Offcanvas } from "./OffCanvas/OffCanvas";

import { navbarCopy } from "../copy/NavBar";
import { OffcanvasProvider } from "./OffCanvas/Context";
import { Trigger } from "./OffCanvas/Trigger";
import Image from 'next/image';


export default function Header() {
    const [show, setShow] = useState(false);
    const handleOpen = () => console.log("");
    const handleClose = () => console.log("");
    return (
        <>
            <div id="nav-desktop" className="navbar navbar-expand-lg navbar-dark mb-3 mt-1">
                <button id="navbar-toggle-btn" className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleMain" aria-controls="navbarToggleMain" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-auto d-flex align-items-center" href="./index.html">
                    <span className="text-small px-1">
                        <img src="./img/navbar-logo.svg" id="navbar-img" alt="DECASWAP Logo" /></span>
                </a>
                <div id="navbarToggleMain" className="collapse navbar-collapse light-text text-center">
                    <ul className="navbar-nav bg-navbar align-items-center col-8 ps-lg-5 text-thin monserrat-medium ">
                        {navbarCopy.links.map((link, index) => (
                            <li key={index} className="nav-item my-sm-3 mx-lg-4 mx-auto">
                                <a href={link.href} target={link.target} className="nav-link text-light text-small" >{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <a className="ms-lg-auto me-lg-0 mx-auto bg-navbar rounded-mobile" href={navbarCopy.button.href} target={navbarCopy.button.target}>
                        <button className="btn bg-gradient-custom text-black mx-auto text-bold" style={{ ["paddingInline" as any]: "30px" }} >{navbarCopy.button.title}</button>
                    </a>
                </div>


            </div>

            <div id="nav-mobile" className="overflow-hidden">

                <div className="w-100 d-flex py-4 justify-content-between align-items-center " id="menu">
                    <a className="navbar-brand d-flex align-items-center col-6 col-lg-4" href="./index.html">
                        <Image width={200} height={150} src="./img/navbar-logo.svg" className="d-inline-block align-top" id="header-logo" alt="DECASWAP Logo" />
                    </a>
                    <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
                        <Trigger />
                        <Offcanvas />
                    </OffcanvasProvider>
                </div>

            </div>
        </>


    );
}