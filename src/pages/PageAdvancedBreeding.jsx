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
import FunkyTitle5 from '../images/funky-title-5.png';
import Zapytanie from '../images/zapytanie.png';
import Eggs from '../images/ehhs.jpg';
import {Tooltip} from 'react-tooltip'
import NavigationAdvanced from "../components/NavigationAdvanced";
import SmokGif0 from "../images/smok-gif.gif"
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Background from "../images/background.jpg";
import FooterAdvanced from "../components/FooterAdvanced";

// const Page = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     return (
//         <>
//             <NavigationAdvanced/>
//             <div style={{marginTop: 60}} className="d-flex fill-height">
//                 <div className="d-flex flex-column w-100 ">
//                         <span className="m-auto">
//                             <img className="m-auto mb-5" src={FunkyTitle5} alt="" height={"auto"} width={400}/>
//                         </span>
//                     <div style={{marginLeft: 60, marginRight: 60}} className="container d-flex flex-row w-100">
//                         <div className="my-3 mx-2">
//                             <p className="lead" style={{fontSize: 28}}>
//                                 Potrafi świetnie się maskować. Jego barwy ciała są w tonacjach niebieskich, aby wmieszać go w
//                                 otoczenie i chronić przed potencjalnymi drapieżnikami. Strona brzuszna, unosząca się na powierzchni
//                                 ma barwy wody, co stanowi ochronę przed ptactwem wodnym. Strona grzbietowa z kolei skierowana
//                                 jest w stronę dna, co ma za zadanie zmylić ryby drapieżne.
//                                 </p>
//                             <p className="lead" style={{fontSize: 28}}>
//                                 Organizmy te są obojnakami. Kopulują ze sobą poprzez połączenie się stronami brzusznymi. Po
//                                 zapłodnieniu osobniki, które uczestniczyły w kopulacji, wytwarzają sznury z jajami na
//                                 kawałki drewna bądź szczątki ofiar. Złożone jaja mogą również unosić się w wodzie.
//                                 <img src={FunFact} alt="Ciekawostka" width={40} id="shake" data-tooltip-id="my-tooltip"
//                                      className="mx-1"
//                                      data-tooltip-html=
//                                          "<h3>Ciekawostka!</h3>
//                                 Jeden sznur zawiera od 12 do 96 białawych jaj i mierzy do 17 mm."
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
//                     </div>
//                     <div className="d-flex flex-row-reverse justify-content-between">
//                         <Link class="m-1 mx-3 p-3"
//                               to="/advanced/end"
//                               id="moving">
//                             <img className="" src={Arrow} alt="Arrow button" width={300 + 'rem'}/>
//                         </Link>
//                         <Link class="m-1 mx-3 p-3"
//                               to="/advanced/feeding"
//                               id="moving">
//                             <img className="" src={ArrowBack} alt="Arrow button" width={300 + 'rem'}/>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// };
//
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
                  to="/advanced/feeding"
                  id="moving-left">
                <img className="" src={ArrowBack} alt="Arrow button" width={250 + 'rem'}/>
            </Link>
            <Link class=" mx-3 p-3 overlay-right"
                  to="/advanced/end"
                  id="moving">
                <img className="" src={Arrow} alt="Arrow button" width={250 + 'rem'}/>
            </Link>
            <img src={Background} alt="Background" height={180}
            />
            <div style={{marginTop: 0}} className="d-flex flex-row">
                <div className="d-flex flex-column col-2 shadow rounded-2 border-0" style={{height: '40rem', background: '#fff', marginRight: 5}}>
                    <div style={{margin:30}} className="d-flex flex-column align-items-center ">
                        <CircularProgressbar value={83} text={`${83}%`} />
                        <b>Strona 5/6</b>
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
                            <img className="m-auto mb-5" src={FunkyTitle5} alt="" height={"auto"} width={300}/>
                        </span>
                    <div style={{marginLeft: 10}} className="container d-flex flex-row w-100">
                        <div className="col-11 my-3 ms-2">
                            <p className="lead" style={{fontSize: 28, marginLeft: 25}}>
                                <figure className="figure float-end" id="scaleImage">
                                    <img src={Eggs} alt="Ciekawostka"  id="scale-image" width={400} data-tooltip-id="my-tooltip"
                                         className=""
                                    />
                                </figure>
                            Organizmy te są obojnakami. Kopulują ze sobą poprzez połączenie się stronami brzusznymi. Po
                            zapłodnieniu osobniki, które uczestniczyły w kopulacji, wytwarzają sznury z jajami na
                            kawałki drewna bądź szczątki ofiar. Złożone jaja mogą również unosić się w wodzie.
                            <img src={FunFact} alt="Ciekawostka" width={40} id="shake" data-tooltip-id="my-tooltip"
                                 className="mx-1"
                                 data-tooltip-html=
                                     "<h3>Ciekawostka!</h3>
                            Jeden sznur zawiera od 12 do 96 białawych jaj i mierzy do 17 mm."
                            />



                                <Tooltip id="my-tooltip" style={{
                                    backgroundColor: "#fff8de",
                                    color: "#222",
                                    padding: 20,
                                    textIndent: 0,
                                    zIndex: 1
                                }} openOnClick={true} opacity={1}/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterAdvanced/>
        </div>
    )
};
export default Page;