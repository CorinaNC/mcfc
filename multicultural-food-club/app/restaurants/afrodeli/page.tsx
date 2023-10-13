import React from "react"
import Head from "@/components/head"

export default function About() {
    return (
        <React.Fragment>
            <Head />
            <div>
                <h1>Afro Deli</h1>
                <iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJA0QhW0Ets1IRNP8Kas5fdBY&key=AIzaSyA8TjgXV4ZjwmrgIS134ONdfVwQoWCdLSQ"></iframe>
            </div>
        </React.Fragment>
    )
}