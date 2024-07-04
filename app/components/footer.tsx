"use client"

import { useEffect } from "react";
import { footerCopy } from "../copy/Footer";
export default function Footer() {
    useEffect(() => {
        const loadScript = (src: string) => {
            return new Promise<void>((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script ${src}`));
                document.body.appendChild(script);
            });
        };

        const loadScripts = async () => {
            try {
                await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
                await loadScript('../lib/fadescroll.js');


                const items = document.querySelectorAll('.appear2');
                const itemsAppear = document.querySelectorAll('.appear3');
                const active = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io2 = new IntersectionObserver(active);
                for (let i = 0; i < items.length; i++) {
                    io2.observe(items[i]);
                }


                // appear
                const active2 = function (entries: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('inview2');
                        } else {
                            entry.target.classList.remove('inview2');
                        }
                    });
                }
                const io3 = new IntersectionObserver(active2);
                for (let i = 0; i < itemsAppear.length; i++) {
                    io2.observe(itemsAppear[i]);
                }

                // scroller
                $(window).scroll(function () {
                    const menu = document.querySelector("#menu");
                    if (menu === null) {
                        return;
                    }
                    if (window.scrollY > 300) {
                        if (!menu.classList.contains('fixed-top')) {
                            menu.classList.add('fixed-top');
                        }
                    } else {
                        if (menu.classList.contains('fixed-top')) {
                            menu.classList.remove('fixed-top');
                        }
                    }
                });
            } catch (error) {
                console.error(error);
            }

            const images = document.querySelectorAll('.floating-image');

            document.addEventListener('mousemove', (event) => {
                const { clientX, clientY } = event;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                const deltaX = (clientX - centerX) / centerX;
                const deltaY = (clientY - centerY) / centerY;

                images.forEach((image: any, index) => {
                    const depth = (index + 1) * 10;
                    const offsetX = -deltaX * depth;
                    const offsetY = -deltaY * depth;
                    image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                });
            });

        };

        loadScripts();
    }, []);
    return (
        <div className="mt-high">
            <div className="row w-100 mb-5 align-items-center">
                <h4 className="me-5 col-md-4 text-medium" >{footerCopy.title_1} <br /> {footerCopy.title_2}
                </h4>
                <a className="mx-lg-5 mx-auto col-md-6" target={footerCopy.button.target} href={footerCopy.button.href} >
                    <button className="btn bg-gradient-custom text-black text-bold" style={{ ["paddingInline" as any]: "30px" }} >{footerCopy.button.title}</button>
                </a>
            </div>

            <div className="seperator-x mt-5"> </div>
            <div className="row my-5">
                <div className="col-lg-6 d-flex flex-column justify-content-between">
                    <a href="#" className="mb-5">
                        <img src="./img/navbar-logo.svg" style={{ ["width" as any]: "200px" }}
                            alt="Footer Logo" />
                    </a>

                    <div>
                        <ul className="navbar-nav footer-social list-group-horizontal">
                            {footerCopy.socials.map((link, index) => (
                                <li key={index} className="mx-2">
                                    <a href={link.href} target={link.target}
                                    ><img src={link.image} alt={link.title} /></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                <div className="col-lg-6 row mt-lg-0 mt-5 justify-content-end">
                    <div className="col-lg-3 col-6">
                        <ul className="list-unstyled">
                            <li className="mb-4">
                                <h3 className="text-medium text-green">{footerCopy.links[0].title}</h3>
                            </li>
                            {footerCopy.links[0].links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} target={link.target} className="nav-link text-small text-thin my-2 link-color" >{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <ul className="list-unstyled">
                            <li className="mb-4">
                                <h3 className="text-medium text-green" >{footerCopy.links[1].title}</h3>
                            </li>
                            {footerCopy.links[1].links.map((link, index) => (
                                <li key={index}> <a href={link.href} target={link.target} className="nav-link text-small text-thin my-2 link-color" >{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
