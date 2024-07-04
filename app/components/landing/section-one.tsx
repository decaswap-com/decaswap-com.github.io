"use client"

import { useEffect } from "react";
import { sectionOneCopy } from "@/app/copy/SectionOne";
import Image from "next/image";

export default function SectionOne() {
    return (
        <>



            <div className="container position-relative" id="header-container">

                <div id="header-slogan" className="header-margin-top">
                    <h1 className="text-uppercase text-n100 monserrat-extrabold text-xlarge fade-effect"
                        fade-time="2"
                        fade-direction="left"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.title === 'string'
                                ? sectionOneCopy.title
                                : ""
                        }} >

                    </h1>
                    <p fade-time="2.5" fade-direction="left"
                        className="text-uppercase text-xxlarge monserrat-extrabold gradient-text-border fade-effect"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.title_colored === 'string'
                                ? sectionOneCopy.title_colored
                                : ""
                        }}></p>
                </div>

                <div id="header-form" className="d-flex w-100 justify-content-between row mx-lg-0 mx-auto subheader-margin-top"
                    style={{ ["alignItems" as any]: "center" }}>
                    <div className="col-lg-5 email-input d-flex justify-content-between">
                        <input className="w-100 border-0 rounded-pill text-white ms-3 text-medium bg-input"
                            placeholder={sectionOneCopy.form.place_holder} type="email" />
                        <button className="btn bg-gradient-custom text-uppercase ms-auto rounded-pill px-4 text-bold"
                            dangerouslySetInnerHTML={{
                                __html: typeof sectionOneCopy.form.button === 'string'
                                    ? sectionOneCopy.form.button
                                    : ""
                            }}
                        ></button>
                    </div>

                    <div className="col-lg-6 d-flex mt-lg-0 mt-5">
                        <div className="seperator-y mx-4 "></div>
                        <h5 className="py-2 text-n300 text-medium"
                            dangerouslySetInnerHTML={{
                                __html: typeof sectionOneCopy.description === 'string'
                                    ? sectionOneCopy.description
                                    : ""
                            }}>
                        </h5>
                    </div>
                </div>

            </div>
            <div className="sm-vertical-gap"></div>

            <div className="container">

                <div className="row" id="main-gateway">
                    <div className="col-lg-6 position-relative text-center text-lg-start">
                        <Image width={300} height={300} id="gateway-img" src="/img/gateway.png" className="position-absolute" alt="Gateway" />
                        <Image width={700} height={700} id="gateway-shadow" src="/img/shadow.png" className="position-absolute" alt="Gateway" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="text-uppercase text-large monserrat-extrabold appear2 green-white-gradient"
                            dangerouslySetInnerHTML={{
                                __html: typeof sectionOneCopy.gateway.title === 'string'
                                    ? sectionOneCopy.gateway.title
                                    : ""
                            }} >
                        </h2>
                        <p className="text-n300 w-70 mt-3 appear2"
                            dangerouslySetInnerHTML={{
                                __html: typeof sectionOneCopy.gateway.description === 'string'
                                    ? sectionOneCopy.gateway.description
                                    : ""
                            }} >
                        </p>
                        <a className="gradient-border mt-5 px-5 py-2 text-decoration-none float-start appear2" href={sectionOneCopy.gateway.button.href} target={sectionOneCopy.gateway.button.target}>
                            <span className="text-gradient text-bold" dangerouslySetInnerHTML={{
                                __html: typeof sectionOneCopy.gateway.button.name === 'string'
                                    ? sectionOneCopy.gateway.button.name
                                    : ""
                            }} >
                            </span>
                        </a>
                    </div>
                </div>

                <div className="sm-vertical-gap"></div>
                <div className="row mt-5">
                    <h2 className="text-uppercase monserrat-extrabold text-large appear2"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.exchange.title === 'string'
                                ? sectionOneCopy.exchange.title
                                : ""
                        }}>
                    </h2>
                    <p className="w-80 text-n300 appear2"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.exchange.description === 'string'
                                ? sectionOneCopy.exchange.description
                                : ""
                        }}>
                    </p>

                    {sectionOneCopy.exchange.items.map((item, index) => (
                        <div key={index} className="d-flex  mt-4">
                            <Image width={75} height={75} src={item.image} className="mb-auto appear2" alt={item.title} />
                            <div className="mx-4">
                                <h4 className="text-uppercase monserrat-bold appear2"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof item.title === 'string'
                                            ? item.title
                                            : ""
                                    }}>
                                </h4>
                                <p className="text-n300 m-0 appear2"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof item.description === 'string'
                                            ? item.description
                                            : ""
                                    }} >
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
                        style={{ ["width" as any]: "fit-content" }}
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.future.top_title === 'string'
                                ? sectionOneCopy.future.top_title
                                : ""
                        }}>
                    </h5>

                    <h2 className="text-uppercase monserrat-extrabold my-5 appear2"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.future.title === 'string'
                                ? sectionOneCopy.future.title
                                : ""
                        }}>
                    </h2>

                    <div className="row" style={{ ["paddingBottom" as any]: "10rem" }}>
                        {sectionOneCopy.future.cards.map((card, index) => (
                            <div key={index} className="col-lg-4 mt-5 mt-lg-0">
                                <h5 className="text-uppercase text-gradient monserrat-semibold mx-auto appear2"
                                    style={{ ["width" as any]: "fit-content" }}
                                    dangerouslySetInnerHTML={{
                                        __html: typeof card.title === 'string'
                                            ? card.title
                                            : ""
                                    }}>
                                </h5>
                                <p className="text-n300 mt-4 px-5 appear2"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof card.description === 'string'
                                            ? card.description
                                            : ""
                                    }}>
                                </p>
                                <Image width={250} height={250} className="mt-high" src={card.image} alt={card.title} />
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
                    <h2 className="text-uppercase my-4 monserrat-extrabold appear2"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.how.title === 'string'
                                ? sectionOneCopy.how.title
                                : ""
                        }}>
                    </h2>
                    <p className="text-n300 appear2"
                        dangerouslySetInnerHTML={{
                            __html: typeof sectionOneCopy.how.description === 'string'
                                ? sectionOneCopy.how.description
                                : ""
                        }}>
                    </p>

                    <div className="d-flex flex-wrap align-items-center mt-5 cards-cont  w-100">
                        {sectionOneCopy.how.items.map((item, index) => (
                            <div key={index} className="gradient-border appear2 monserrat-medium d-flex align-items-center p-3 bg-light-gradient m-lg-0 m-3"
                                style={{ ["width" as any]: "250px" }}>
                                <Image src={item.image} width={50} height={50} alt={item.name} />
                                <span className="text-uppercase text-gradient mx-3"
                                    dangerouslySetInnerHTML={{
                                        __html: typeof item.name === 'string'
                                            ? item.name
                                            : ""
                                    }}>
                                </span>
                            </div>
                        ))}

                    </div>



                </div>
            </div>

            <footer className="container mt-300 mt-high" id="footer"></footer>

        </>
    )
}