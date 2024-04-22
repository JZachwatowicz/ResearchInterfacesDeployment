import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Study from "../images/study.jpg"
import School from "../images/school.jpg"
import Underwater from "../images/underwater.jpg"
import Dragon from "../images/dragon.png"
import Snail from "../images/snail.png"
import {Button, Card} from "react-bootstrap";
import Arrow from '../images/arrow.png';
import FunFact from '../images/Fun-Fact.png';
import {Tooltip} from "react-tooltip";
import NavigationAdvanced from "../components/NavigationAdvanced";
import Carousel from 'react-bootstrap/Carousel';

const HomeAdvanced = () => {


    return (
        <>
            <NavigationAdvanced/>
            <div className="">
                {/*<img src={Study} alt="study" className="z-index-n1 w-100" />*/}
                <Carousel indicators={false} variant={"dark"}>
                    <Carousel.Item>
                        <img src={Study} alt="study" className="z-index-n1 w-100"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={School} alt="study" className="z-index-n1 w-100"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Underwater} alt="study" className="z-index-n1 w-100"/>
                    </Carousel.Item>
                </Carousel>
                <div style={{marginBottom: -70 + 'px'}}
                     className="z-index-2 position-relative top-100 start-50 translate-middle d-flex justify-content-around w-75">
                    <Card style={{width: '25rem', background: '#FFCFCF', marginLeft: 5, marginRight: 5}}
                          className="shadow  rounded-5 border-0" id="scale">
                        <Card.Body>
                            <Card.Title style={{fontSize: '1.5rem', fontWeight: 600,}}>Poruszaj się za pomocą
                                strzałek</Card.Title>
                            <Card.Text>
                                Po stronach możesz poruszać się za pomocą strzałek oraz nawigacji umieszczonej na górze oraz po lewej stronie ekranu.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem', background: '#CFFFCF', marginLeft: 5, marginRight: 5}}
                          className="shadow rounded-5 border-0" id="scale">
                        <Card.Body>
                            <Card.Title style={{fontSize: '1.5rem', fontWeight: 600,}}>Czytaj dokładnie</Card.Title>
                            <Card.Text>
                                Przeczytaj dokładnie informacje zamieszczone na stronie, na stronie końcowej czeka cię mały quiz :)
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '25rem', background: '#CFCFFF', marginLeft: 5, marginRight: 5}}
                          className="shadow rounded-5 border-0" id="scale">
                        <Card.Body>
                            <Card.Title style={{fontSize: '1.5rem', fontWeight: 600,}}>Kliknij mnie!</Card.Title>
                            <Card.Text>
                                Gdy zobaczysz tę ikonę
                                <img src={FunFact} alt="Ciekawostka" style={{marginTop: -30, marginLeft: 5,}}
                                     width={50 + 'rem'} id="shake" data-tooltip-id="my-tooltip"
                                     data-tooltip-html=
                                         "<h3>Ciekawostka!</h3>Kliknij mnie, aby otworzyć ciekawostkę!"
                                />
                                <Tooltip id="my-tooltip" style={{
                                    backgroundColor: "#fff8de",
                                    color: "#222",
                                    padding: 20,
                                    textIndent: 0,
                                }} openOnClick={true} opacity={1}/>
                                <br/>możesz ją kliknąć, aby zobaczyć ciekawostkę na dany temat.
                                Kliknięcie w dowolnym miejscu poza dymkiem spowoduje zamknięcie ciekawostki.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="d-flex d-row justify-content-between fill-height">
                <div
                    className="w-100 d-flex flex-column justify-content-center px-5 shadow-sm border-top border-1 border-gray ">
                    <div className="container col-10">
                        <h2 className="mt-3">Ślimak, czy mały smok?</h2>
                        <img src={Dragon} alt="dragon" className="z-index-n1" height={100}
                             style={{float: "right", margin: 5}}/>
                        <p className="lead">Witaj!</p>
                        <p className="lead">
                            Cieszymy się, że tu jesteś i chcesz dowiedzieć się więcej o naszym ulubionym zwierzątku - Niebieskim Smoku Morskim. Przeczytaj uważnie informacje znajdujące się na stronie, a potem spróbuj odpowiedzieć na kilka pytań w formularzu, do którego link znajduje się na stronie końcowej, żebyśmy mogli dowiedzieć się, jak dobrze udało Ci się przyswoić te informacje.
                        </p>

                            <img src={Snail} alt="snail" className="z-index-n1" height={100}
                                 style={{float: "left", margin: 10}}/>
                        <p className="lead">
                            Będziemy bardzo wdzięczne za uważne wykonanie zadania, bardzo nam w ten sposób pomożesz w naszej pracy dyplomowej.
                            Zapraszamy!
                        </p>
                        <br/>
                        <div className="d-flex flex-row-reverse align-items-center" style={{marginTop: -80}}>
                            <Link class="m-1 mx-3 p-3" to="/advanced/what-is-blue-dragon" id="moving">
                                <img className="" src={Arrow} alt="Arrow button" width={300 + 'rem'}/>
                            </Link>
                            <h3>Zaczynamy!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomeAdvanced;