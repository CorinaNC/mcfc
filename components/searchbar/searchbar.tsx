import React from "react"
import './style.css'
import Image from "next/image"
export default function SearchBar() {
    return (
        <section className="nav-bar">
        <form action="" className="search">
            <div className="searchBar">
                <input type="search" className="" />
                <button>
                    <Image
                        src="/search.svg"
                        width={25}
                        height={25}
                        alt="lol"
                        className=""
                    />
                </button>
            </div>
        </form>
        </section>
    )
} 