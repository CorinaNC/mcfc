import React from "react"
import Head from "../../components/head"

export default function About() {
    return (
        <React.Fragment>
            <Head />
            <h2>About Us</h2>
            <p>Hello, we are a group of University students who want to share
                our love of food.
            </p>
            <p>We created this group to share our cultures with the U of M populace and to provide pointers on quality restaurants.</p>
            <p>
                You can read about our members <a href="./members">here</a>
            </p>
        </React.Fragment>
    )
}