"use client"

import { useEffect } from "react";
import { landingData } from "@/app/copy/landing";
import { sectionOneCopy } from "@/app/copy/SectionOne";

export default function SectionOne() {
    return (
        <>
            <div id="decaswap-header" > </div>
            <div className="content text-n100 position-relative overflow-hidden">

                <div className="container position-relative" id="header-container">

                    <div id="header-slogan" className="header-margin-top">
                        <h1 className="text-uppercase text-n100 monserrat-extrabold text-xlarge fade-effect"
                            fade-time="2"
                            fade-direction="left" >
                            {sectionOneCopy.title}
                        </h1>
                        <p fade-time="2.5" fade-direction="left"
                            className="text-uppercase text-xxlarge monserrat-extrabold gradient-text-border fade-effect"
                        >{sectionOneCopy.title_colored}</p>
                    </div>

                    <div id="header-form" className="d-flex w-100 justify-content-between row mx-lg-0 mx-auto subheader-margin-top"
                        style={{ ["alignItems" as any]: "center" }}>
                        <div className="col-lg-5 email-input d-flex justify-content-between">
                            <input className="w-100 border-0 rounded-pill text-white ms-3 text-medium bg-input"
                                placeholder={sectionOneCopy.form.place_holder} type="email" />
                            <button className="btn bg-gradient-custom text-uppercase ms-auto rounded-pill px-4 text-bold"
                            >{sectionOneCopy.form.button}</button>
                        </div>

                        <div className="col-lg-6 d-flex mt-lg-0 mt-5">
                            <div className="seperator-y mx-4 "></div>
                            <h5 className="py-2 text-n300 text-medium" data-query="home.header.subtitle">
                                {sectionOneCopy.description_1} <br />
                                {sectionOneCopy.description_2}
                            </h5>
                        </div>
                    </div>

                </div>
                <div className="sm-vertical-gap"></div>

                <div className="container">

                    <div className="row" id="main-gateway">
                        <div className="col-lg-6 position-relative text-center text-lg-start">
                            <img id="gateway-img" src="/img/gateway.png" className="position-absolute" alt="Gateway" />
                            <img id="gateway-shadow" src="/img/shadow.png" className="position-absolute" alt="Gateway" />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="text-uppercase text-large monserrat-extrabold appear2 green-white-gradient" >
                                {sectionOneCopy.gateway.title_1} <br /> {sectionOneCopy.gateway.title_2}
                            </h2>
                            <p className="text-n300 w-70 mt-3 appear2">
                                {sectionOneCopy.description_1}
                                <br />
                                {sectionOneCopy.description_2}
                            </p>
                            <a className="gradient-border mt-5 px-5 py-2 text-decoration-none float-start appear2" href={sectionOneCopy.gateway.button.href} target={sectionOneCopy.gateway.button.target}>
                                <span className="text-gradient text-bold" >{sectionOneCopy.gateway.button.name}</span>
                            </a>
                        </div>
                    </div>

                    <div className="sm-vertical-gap"></div>
                    <div className="row mt-5">
                        <h2 className="text-uppercase monserrat-extrabold text-large appear2">
                            {sectionOneCopy.exchange.title_1} <br /> {sectionOneCopy.exchange.title_2}
                        </h2>
                        <p className="w-80 text-n300 appear2">
                            {sectionOneCopy.exchange.description}
                        </p>

                        {sectionOneCopy.exchange.items.map((item, index) => (
                            <div key={index} className="d-flex  mt-4">
                                <img src={item.image} className="mb-auto appear2" alt={item.title} />
                                <div className="mx-4">
                                    <h4 className="text-uppercase monserrat-bold appear2" >
                                        {item.title}
                                    </h4>
                                    <p className="text-n300 m-0 appear2" >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="vertical-gap position-relative">
                        <div id="top-left-gradient"></div>
                        <div id="top-right-gradient"></div>
                        <div id="top-right-gradient-2"></div>
                    </div>
                    <div className="text-center gradient-box">
                        <h5 className="text-uppercase text-gradient my-5 mx-auto appear2"
                            style={{ ["width" as any]: "fit-content" }}>
                            {sectionOneCopy.future.top_title}
                        </h5>

                        <h2 className="text-uppercase monserrat-extrabold my-5 appear2" >
                            {sectionOneCopy.future.title_1}<br /> {sectionOneCopy.future.title_2}
                        </h2>

                        <div className="row" style={{ ["paddingBottom" as any]: "10rem" }}>
                            {sectionOneCopy.future.cards.map((card, index) => (
                                <div key={index} className="col-lg-4 mt-5 mt-lg-0">
                                    <h5 className="text-uppercase text-gradient monserrat-semibold mx-auto appear2"
                                        style={{ ["width" as any]: "fit-content" }} >
                                        {card.title_1}
                                        <br />
                                        {card.title_2}
                                    </h5>
                                    <p className="text-n300 mt-4 px-5 appear2">
                                        {card.description}
                                    </p>
                                    <img className="mt-high" src={card.image} alt={card.title_1} />
                                </div>
                            ))}
                        </div>
                    </div>


                    <div style={{ ["height" as any]: "100px" }}></div>
                    <div className="mt-high position-relative">
                        <div id="bottom-left-gradient"></div>
                        <h5 className="text-uppercase text-gradient appear2"
                            style={{ ["width" as any]: "fit-content" }}>
                            {sectionOneCopy.how.top_title}</h5>
                        <h2 className="text-uppercase my-4 monserrat-extrabold appear2">
                            {sectionOneCopy.how.title_1}
                            <br />
                            {sectionOneCopy.how.title_2}
                        </h2>
                        <p className="text-n300 appear2">
                            {sectionOneCopy.how.description}
                        </p>

                        <div className="d-flex flex-wrap align-items-center mt-5 cards-cont  w-100">
                            {sectionOneCopy.how.items.map((item, index) => (
                                <div key={index} className="gradient-border appear2 monserrat-medium d-flex align-items-center p-3 bg-light-gradient m-lg-0 m-3"
                                    style={{ ["width" as any]: "250px" }}>
                                    <img src={item.image} alt={item.name_1} />
                                    <span className="text-uppercase text-gradient mx-3">
                                        {item.name_1} <br />  {item.name_2}</span>
                                </div>
                            ))}

                        </div>



                    </div>
                </div>

                <footer className="container mt-300 mt-high" id="footer"></footer>
            </div>
        </>
    )
}