import React from "react"
import Head from "@/components/head"
import { redirect } from "next/dist/server/api-utils"
import './style.css'

export default function Restaurants() {
    const styles = {
        main: {
            width: "100%",
        },
        images: {
            width: '100%',
            height: 'auto',
            border: '5px solid red',
            margin: '30px',
        },
    };
    return (
        <React.Fragment>
            <Head />
            <title>Restaurants</title>
            <h2>Restaurants</h2>
            <p>Here are some of the restaurants on campus!</p>
            <div class="east bank">
                <h3>East Bank</h3>
                <a href="./restaurants/afrodeli">
                <div class="restaurant-img">
                    <img src="https://assets.nationbuilder.com/afrodeli/sites/1/meta_images/original/afro-logo.png?1487019946" alt="React Image" />
                    <div class="overlay">
                        <div class="text">Afro Deli</div>
                    </div>
                </div>
                </a>
            </div>
            <div class="west bank">
                <h3>West Bank</h3>
                <a href="./restaurants/hardtimescafe">  
                <div class="restaurant-img">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Hard_times_cafe_minneapolis.jpg" />
                    <div class="overlay">
                        <div class="text">Hard Times Cafe</div>
                    </div>
                </div>
                </a>
            </div>
        </React.Fragment>
    )
}