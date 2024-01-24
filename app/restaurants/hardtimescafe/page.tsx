import React from "react"
import Head from "@/components/head"
import Comment from "@/components/comment";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function About() {
    return (
        <React.Fragment>
            <Head />
            <div class="top">
                <h1>Hard Times Cafe</h1>
                <iframe width="600" height="450" loading="lazy" allowfullscreen src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJA0QhW0Ets1IRNP8Kas5fdBY&key=${apiKey}`}></iframe>
            </div>
            <Comment />
        </React.Fragment>
    )
}