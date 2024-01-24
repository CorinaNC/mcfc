import React from "react";
import "./style.css";

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="Footer">
                <section className="information">The Multicultural Food Club is a student run website managed by a club of the same name.  
                    They operate independently from the University of Minnesota’s campuses with no direct affiliation..</section>
                <section>
                <ul className="links">
                    <ul className="contact">
                        <li className="header">Connect With Us</li>
                        <li><a>mcfc@mcfc.net</a></li>
                        <li><a>@umn.mcfc</a></li>
                        <li><a>@mcfc.twitter</a></li>
                    </ul>

                    <ul className="quickLinks">
                        <li className="header">Quick Links</li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/restaurants">Restaurants</a></li>
                        <li><a href="/reviews">Reviews</a></li>
                        <li><a href="/members">Members</a></li>
                        <li><a href="/about">About Us</a></li>

                    </ul>
                </ul>
                </section>   
            </footer>
        </React.Fragment>
    )
}