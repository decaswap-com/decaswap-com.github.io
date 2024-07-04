"use server"

import Footer from "@/app/components/Footer";
import Header from "@/app/components/NavBar"
import SectionOne from "@/app/components/landing/section-one";

export default async function Landing() {

    return (
        <>

            <header className="header mb-2">
                <nav className="mx-lg-5 mx-2 mb-5 mb-lg-0" id="navbar"
                    style={{ ["height" as any]: "90px" }}>
                    <Header />

                </nav>

            </header>
            <div id="decaswap-header" > </div>
            <div className="content text-n100 position-relative overflow-hidden">
                <SectionOne />
            </div>
            <footer className="container mt-300 mt-high" id="footer">
                <Footer />
            </footer>
        </>


    );
}