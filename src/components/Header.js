import React from "react"
export default function Header() {
    return (
        <div className="header">
            <img src={require("../images/troll-face.png")} />
            <h2 className="header-title">Meme Generator</h2>
        </div>
    )
}
