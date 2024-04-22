import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import contrast from '../images/contrast.png';
import fontBigger from '../images/font-bigger.png';
import fontSmaller from '../images/font-smaller.png';
import axios from "axios";
const NavigationIntermediate = (props) => {



    const [reaload, setReload] = useState(true);
    var NavTitles = [{ name:"Start", link: "/intermediate/"},{name: "Czym jest smok niebieski?", link: "page?id=0"},{name: "Występowanie", link: "page?id=1"},{name: "Wygląd", link: "page?id=2"},{name: "Życie", link: "page?id=3"}, {name: "Rozmnażanie", link: "page?id=4"}]
    const handleIncrese = () => {
        let body = document.documentElement
        if(localStorage.getItem("fontSize") === null){
            localStorage.setItem("fontSize", "1.25");
        }
        if(localStorage.getItem("fontSize") < 2.5){
            localStorage.setItem('fontSize', (parseFloat(localStorage.getItem("fontSize"))+0.25).toString())
            body.style.setProperty('--bs-body-font-size-acc', localStorage.getItem("fontSize")+'rem')
        }
    }
    const handleDescrese = () => {
        let body = document.documentElement
        if(localStorage.getItem("fontSize") === null){
            localStorage.setItem("fontSize", "1");
        }
        if(localStorage.getItem("fontSize") >0.75){
            localStorage.setItem('fontSize', (parseFloat(localStorage.getItem("fontSize"))-0.25).toString())
            body.style.setProperty('--bs-body-font-size-acc', localStorage.getItem("fontSize")+'rem')
        }

    }

    useEffect(() => {
        const handleLoad = () => {
            let body = document.body;
            body.style.setProperty('--bs-body-font-size', localStorage.getItem('fontSize'));
        };
        window.addEventListener('load', handleLoad);
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    },[]);

    return(
        <div className="intermediate">
            <div className="pb-1 pt-1 bg-inter d-flex d-flex justify-content-between shadow-sm ">
                <nav className="navbar navbar-light d-inline-flex">
                    <a className="navbar-brand px-4 p-2 " href="#">LOGO</a>
                        {NavTitles.map((nav, index) => (

                             <a key={index} href={nav.link} className={`on-hover-link-inter resize nav-item nav-link px-5 p-3 border-start border-3 border-white ${window.location.href.endsWith(nav.link) ? " bg-white text-inter" : "" }`} onClick={()=>{ setReload(!reaload);}}> {nav.name}</a>
                        ))}
                     </nav>
                <span class="p-2 px-5">
                    <button className="btn-transparent" onClick={handleIncrese}><img className="visible" src={contrast} width={30} height={30} class="m-2"/></button>
                    <button className="btn-transparent" onClick={handleIncrese}><img className="visible" src={fontBigger} width={30} height={20} class="m-2"/></button>
                    <button className="btn-transparent" onClick={handleDescrese}><img className="visible" src={fontSmaller} width={30} height={20} class="m-2"/></button>
                </span>
            </div>
        </div>
    )
};

export default NavigationIntermediate;