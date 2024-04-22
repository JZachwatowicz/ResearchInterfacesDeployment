import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import Study from "../images/study.jpg"
import {Button, Card} from "react-bootstrap";
import Arrow from '../images/arrow.png';
import ArrowBack from '../images/arrow-back.png';
import FunFact from '../images/Fun-Fact.png';
import FunFactText from '../images/FunFactText.png';
import FunkyTitle1 from '../images/funky-title-1.png';
import Zapytanie from '../images/zapytanie.png';
import {Tooltip} from 'react-tooltip'
import NavigationAdvanced from "../components/NavigationAdvanced";
import FooterAdvanced from "../components/FooterAdvanced";
import Background from "../images/background.jpg";
import SmokGif0 from "../images/smok-gif.gif"
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from "../components/FooterAdvanced";

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
        <div>
            <NavigationAdvanced/>
                <Link class="mx-3 p-3 overlay-left"
                      to="/advanced/"
                      id="moving-left">
                    <img className="" src={ArrowBack} alt="Arrow button" width={250 + 'rem'}/>
                </Link>
                <Link class=" mx-3 p-3 overlay-right"
                      to="/advanced/occurrence"
                      id="moving">
                    <img className="" src={Arrow} alt="Arrow button" width={250 + 'rem'}/>
                </Link>
            <img src={Background} alt="Background" height={180}
            />
            <div style={{marginTop: 0}} className="d-flex flex-row">
                <div className="d-flex flex-column col-2 shadow rounded-2 border-0" style={{height: '40rem', background: '#fff', marginRight: 5}}>
                        <div style={{margin:30}} className="d-flex flex-column align-items-center ">
                            <CircularProgressbar value={17} text={`${17}%`} />
                            <b>Strona 1/6</b>
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
                <div className="d-flex flex-column">
                        <span className="mx-auto mt-5">
                            <img className="m-auto mb-5" src={FunkyTitle1} alt="" height={"auto"} width={550}/>
                            <img className="m-auto mb-5" src={Zapytanie} alt="" height={"auto"} width={70}/>
                        </span>
                    <div style={{marginLeft: 10}} className="container d-flex flex-row w-100">
                        <div className="col-10 my-3 ms-2">
                            <p className="lead" style={{fontSize: 28, marginLeft: 25}}>
                                Niebieski smok morski, zwany również jaskółką morską to gatunek jadowitego morskiego
                                ślimaka tyłoskrzelnego,
                                <img src={FunFact} alt="Ciekawostka" width={40} id="shake" data-tooltip-id="my-tooltip"
                                     className="mx-1"
                                     data-tooltip-html=
                                         "<h3>Ciekawostka!</h3>
                                Są to jedne na najbardziej inteligentnych głowonogów. <br/>Potrafią nawet rozwiązywać zagadki
                                i bardzo szybko dostosowują się do zmieniających się warunków."
                                />
                                który występuje w wodach umiarkowanych i tropikalnych. Gromadzi jad w końcówkach odnóży,
                                dlatego NIE WOLNO GO DOTYKAĆ.


                                <Tooltip id="my-tooltip" style={{
                                    backgroundColor: "#fff8de",
                                    color: "#222",
                                    padding: 20,
                                    textIndent: 0,
                                    zIndex: 1
                                }} openOnClick={true} opacity={1}/>
                            </p>
                            <div className="flex-row float-end">
                                <img src={SmokGif0} alt="Ciekawostka"  id="scale-image" width={200} data-tooltip-id="my-tooltip"
                                     style={{marginTop: -40, marginRight: 50}}
                                />
                            </div>

                        </div>
                        <div className=" border-start">
                            <div id="show" className="d-flex flex-row align-items-start ps-5">
                                <span className="rounded-2 rounded-end-0 p-3 ps-2" style={{width:170,backgroundColor: "#ffcfcf", fontWeight:"bold", fontSize: 24}}>Systematyka</span>
                                <Card style={{width: '25rem', background: '#FFCFCF'}}
                                      className="rounded-2 rounded-top-0 border-0" >
                                    <Card.Body>
                                        <Card.Title style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 600,
                                            marginBottom: 20,
                                            marginLeft: 10
                                        }}>Systematyka:</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Domena: eukarionty</li>
                                                <li>Królestwo: zwierzęta</li>
                                                <li>Typ: mięczaki</li>
                                                <li>Gromada: ślimaki</li>
                                                <li>Podgromada: tyłoskrzelne</li>
                                                <li>Rząd: nagoskrzelne</li>
                                                <li>Rodzina: Glaucidae (gladusziowate)</li>
                                                <li>Rodzaj: Glaucus</li>
                                                <li>Łacińska nazwa: Glaucus atlanticus</li>
                                            </ul>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAdvanced/>
        </div>
    )
};
export default Page;