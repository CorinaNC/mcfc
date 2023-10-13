import React from "react"
import Head from "@/components/head"

export default function About() {
    return (
        <React.Fragment>
            <Head />
            <div class="top">
                <h1>Hard Times Cafe</h1>
                <iframe width="600" height="450" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIxHJx0Mts1IRlGMFZ_q61xo&key=AIzaSyA8TjgXV4ZjwmrgIS134ONdfVwQoWCdLSQ"></iframe>
            </div>
        </React.Fragment>
    )
}