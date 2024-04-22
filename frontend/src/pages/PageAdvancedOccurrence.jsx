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
import Zatoka from '../images/zatoka.jpg';
import {Tooltip} from 'react-tooltip'
import NavigationAdvanced from "../components/NavigationAdvanced";
import SmokGif0 from "../images/smok-gif.gif"
import Wybrzeze from "../images/wybrzeze.jpg"
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Background from "../images/background.jpg";
import FooterAdvanced from "../components/FooterAdvanced";

// const Page = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     return (
//         <>
//             <NavigationAdvanced/>
//             <div style={{marginTop: 60}} className="d-flex flex-row fill-height">
//                 <div className="d-flex flex-column col-2">
//                     <div style={{width: '17rem',height: '40rem', background: '#fff', marginRight: 5}}
//                          className="shadow rounded-2 border-0" id="scale">
//                         <div style={{margin:30}}>
//                             <CircularProgressbar value={17} text={`${17}%`} />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="d-flex flex-column">
//                         <span className="mx-auto">
//                             <img className="m-auto mb-5" src={FunkyTitle2} alt="" height={"auto"} width={400}/>
//                         </span>
//                     <div style={{marginLeft: 10, marginRight: 60}} className="container d-flex flex-row w-100">
//                         <div className="col-8 my-3 mx-2">
//                             <p className="lead" style={{fontSize: 28}}>
//                                 <figure className="figure float-start me-4" id="scaleImage">
//                                     <img src={SmokGif0} alt="Ciekawostka" width={150}
//                                          data-tooltip-id="my-tooltip" className="rounded-circle"
//
//                                     />
//                                 </figure>
//                                 Występuje w otwartych, ciepłych wodach w pobliżu wybrzeży Morza Śródziemnego i
//                                 Atlantyku. W
//                                 szczególności w okolicach wybrzeży europejskich, RPA, Mozambiku i wschodnim
//                                 wybrzeżu Australii.
//                                 <img src={FunFact} alt="Ciekawostka" width={40} id="shake"
//                                      data-tooltip-id="my-tooltip" className="mx-1"
//                                      data-tooltip-html=
//                                          "<h3>Ciekawostka!</h3>
//                                 Czasami, wyrzucony przez fale pojawia się na plażach, ale pamiętajcie, że <b> nie wolno go dotykać</b>."
//                                 />
//                                 <Tooltip id="my-tooltip" style={{
//                                     backgroundColor: "#fff8de",
//                                     color: "#222",
//                                     padding: 20,
//                                     textIndent: 0,
//                                     zIndex: 1
//                                 }} openOnClick={true} opacity={1}/>
//                             </p>
//                         </div>
//                         <div className="col-4 w-100 border-start px-5">
//                             <Card style={{width: '25rem', background: '#FFCFCF', marginLeft: 5, marginRight: 5}}
//                                   className="shadow  rounded-5 border-0" id="scale">
//                                 <Card.Body>
//                                     <Card.Title style={{
//                                         fontSize: '1.5rem',
//                                         fontWeight: 600,
//                                         marginBottom: 20,
//                                         marginLeft: 10
//                                     }}></Card.Title>
//                                     <Card.Text>
//                                         Ostatnio, ze względu na ocieplenie klimatu, co raz częściej pojawia się u
//                                         wybrzeży Hiszpanii.
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//
//                         </div>
//                     </div>
//                     <div className="d-flex flex-row-reverse justify-content-between">
//                         <Link class="m-1 mx-3 p-3"
//                               to="/advanced/appearance"
//                               id="moving">
//                             <img className="" src={Arrow} alt="Arrow button" width={300 + 'rem'}/>
//                         </Link>
//                         <Link class="m-1 mx-3 p-3"
//                               to="/advanced/what-is-blue-dragon"
//                               id="moving">
//                             <img className="" src={ArrowBack} alt="Arrow button" width={300 + 'rem'}/>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };
// export default Page;

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
                  to="/advanced/what-is-blue-dragon"
                  id="moving-left">
                <img className="" src={ArrowBack} alt="Arrow button" width={250 + 'rem'}/>
            </Link>
            <Link class=" mx-3 p-3 overlay-right"
                  to="/advanced/appearance"
                  id="moving">
                <img className="" src={Arrow} alt="Arrow button" width={250 + 'rem'}/>
            </Link>
            <img src={Background} alt="Background" height={180}
            />
            <div style={{marginTop: 0}} className="d-flex flex-row">
                <div className="d-flex flex-column col-2 shadow rounded-2 border-0" style={{height: '40rem', background: '#fff', marginRight: 5}}>
                    <div style={{margin:30}} className="d-flex flex-column align-items-center ">
                        <CircularProgressbar value={33} text={`${33}%`} />
                        <b>Strona 2/6</b>
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
                            <img className="m-auto mb-5" src={FunkyTitle2} alt="" height={"auto"} width={350}/>
                        </span>
                    <div style={{marginLeft: 10}} className="container d-flex flex-row w-100">
                        <div className="col-10 my-3 ms-2">
                            <p className="lead" style={{fontSize: 28, marginLeft: 25}}>
                                Występuje w otwartych, ciepłych wodach w pobliżu wybrzeży Morza Śródziemnego i
                                Atlantyku. W
                                szczególności w okolicach wybrzeży europejskich, RPA, Mozambiku i wschodnim
                                wybrzeżu Australii.
                                <img src={FunFact} alt="Ciekawostka" width={40} id="shake" data-tooltip-id="my-tooltip"
                                     className="mx-1"
                                     data-tooltip-html=
                                         "<h3>Ciekawostka!</h3>
                                Czasami, wyrzucony przez fale pojawia się na plażach, ale pamiętajcie, że <b> nie wolno go dotykać"
                                />


                                <Tooltip id="my-tooltip" style={{
                                    backgroundColor: "#fff8de",
                                    color: "#222",
                                    padding: 20,
                                    textIndent: 0,
                                    zIndex: 1
                                }} openOnClick={true} opacity={1}/>
                            </p>
                            <img src={Zatoka} alt="" className="w-100"/>
                        </div>
                        <div className=" border-start">
                            <div id="show" className="d-flex flex-row align-items-start ps-5">
                                <span className="rounded-2 rounded-end-0 p-3 ps-2" style={{width:170, backgroundColor: "#ffcfcf", fontWeight:"bold", fontSize: 24}}>Zmiany<br/>klimatu</span>
                                <Card style={{width: '25rem', background: '#FFCFCF'}}
                                      className="rounded-2 rounded-top-0 border-0" >
                                    <Card.Body>
                                        <Card.Text>
                                            Ostatnio, ze względu na ocieplenie klimatu, co raz częściej pojawia się u wybrzeży Hiszpanii.
                                            <figure className="figure float-start me-4 mt-3" id="scaleImage">
                                                                                     <img src={Wybrzeze} alt="Ciekawostka" width={300}
                                                                                      data-tooltip-id="my-tooltip" className="rounded"

                                                                                 />
                                                                             </figure>
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