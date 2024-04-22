import React, {useEffect} from 'react';
import {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

const NavigationAdvanced = (props) => {


    const [reaload, setReload] = useState(true);
    var NavTitles =
        [{name: "Start", link: "/advanced/"}, {
        name: "Czym jest smok niebieski?",
        link: "/advanced/what-is-blue-dragon"
    }, {name: "Występowanie", link: "/advanced/occurrence"}, {
        name: "Wygląd",
        link: "/advanced/appearance"
    }, {name: "Żerowanie", link: "/advanced/feeding"
        },{ name: "Rozmnażanie",
            link: "/advanced/breeding"

        }
        ]


    return (
        <div>
            <div className=" py-2 d-flex d-flex justify-content-between shadow-sm">
                <nav className="navbar navbar-light d-inline-flex">
                    <a className="navbar-brand px-4 p-2 " href="#">LOGO</a>
                    {NavTitles.map((nav, index) => (
                        <a key={index} href={nav.link}
                           className={`resize on-hover-link nav-item nav-link px-5 p-3 text-black border-start border-3 border-white ${window.location.href.endsWith(nav.link) ? "bg-secondary" : ""}`}
                           onClick={() => {
                               setReload(!reaload);
                           }}> {nav.name}</a>
                    ))}
                </nav>
            </div>
        </div>
    )
};

export default NavigationAdvanced;