import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import Study from "../images/study.jpg"
import {Button, Card} from "react-bootstrap";
import Arrow from '../images/arrow.png';
import ArrowBack from '../images/arrow-back.png';
import FunFact from '../images/Fun-Fact.png';
import FunFactText from '../images/FunFactText.png';
import FunkyTitle1 from '../images/funky-title-1.png';
import FunkyTitle2 from '../images/funky-title-2.png';
import FunkyTitle3 from '../images/funky-title-3.png';
import FunkyTitle4 from '../images/funky-title-4.png';
import Zapytanie from '../images/zapytanie.png';
import {Tooltip} from 'react-tooltip'
import NavigationAdvanced from "../components/NavigationAdvanced";
import SmokGif0 from "../images/smok-gif.gif"
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import FooterAdvanced from "../components/FooterAdvanced";

const Page = () => {
    const [searchParams, setSearchParams] = useSearchParams();
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
        <>
            <NavigationAdvanced/>
            <div  className="d-flex fill-height flex-row">
                <div className="d-flex flex-column col-2 shadow rounded-2 border-0" style={{height: '40rem', background: '#fff', marginRight: 5}}>
                    <div style={{margin:30}} className="d-flex flex-column align-items-center ">
                        <CircularProgressbar value={100} text={`${100}%`} />
                        <b>Strona 6/6</b>
                    </div>
                    <nav className="d-flex flex-column align-items-start navbar navbar-light">
                        {NavTitles.map((nav, index) => (
                            <a key={index} href={nav.link}
                               className={`resize w-100 on-hover-link nav-item nav-link px-3 p-2 text-black border-start border-3 border-white ${window.location.href.endsWith(nav.link) ? "bg-secondary" : ""}`}
                               onClick={() => {
                                   setReload(!reaload);
                               }}> {nav.name}</a>
                        ))}
                    </nav>
                </div>
                <div className="d-flex flex-column w-100 ms-2">
                            <h1 className="mx-auto mt-5 mb-3">Już prawie koniec!</h1>
                        <div className="my-3 mx-2">
                            <p className="lead" style={{fontSize: 28}}>
                                Dziękujemy za przeczytanie informacji zamieszczonych na stronie! Możesz teraz wypełnić krótki quiz który sprawdzi jak dobrze zapamiętałeś przeczytane informacje oraz twoją opinię o stronie. Jest tylko jeden warunek: <b>Nie podglądaj odpowiedzi na stronie, odpowiadaj tylko z pamięci!</b> <br/><br/>
                                Link do quizu: <a className="link-dark" href="https://forms.office.com/e/kyPavtrfQT">https://forms.office.com/e/kyPavtrfQT</a>
                            </p>
                        </div>
                    <div className="d-flex flex-row justify-content-start">
                        <Link class="m-1 mx-3 p-3"
                              to="/advanced/breeding"
                              id="moving">
                            <img className="" src={ArrowBack} alt="Arrow button" width={300 + 'rem'}/>
                        </Link>
                    </div>
                </div>
            </div>
            <FooterAdvanced/>
        </>
    )
};
export default Page;