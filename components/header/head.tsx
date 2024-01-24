import React from "react";
import Image from 'next/image'
import SearchBar from "../searchbar/searchbar";

export default function Head() {

    return (
      <div className="header">
        
        <SearchBar />
      </div>
    )
  }