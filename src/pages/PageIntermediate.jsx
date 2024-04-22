import React, {useEffect, useState} from 'react';
import NavigationIntermediate from "../components/NavigationIntermediate";
import Smok0 from "../images/niebieski-smok-czym-jest.png";
import Smok1 from "../images/niebieski-smok-wystepowanie.png";
import Smok from "../images/smok-niebieski.jpg";
import Wybrzeze from "../images/wybrzeze.jpg";
import Smok2 from "../images/smok-wyglad.jpg";
import Smok3 from "../images/smok-wyglad-2.jpg";
import Zeglarz from "../images/zeglarz.png";
import Eggs from "../images/ehhs.jpg";
import {Link, useSearchParams} from "react-router-dom";
const Page = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return(
        <>
            <NavigationIntermediate/>
            <div className="d-flex flex-column py-2 mx-5 my-3 px-3 align-items-center">
                <div className="d-flex flex-row">
                    <div className=" shadow-inter rounded-2 mx-2 my-3 p-3 ">
                        <div className="p-3">
                            {parseInt(searchParams.get("id")) === 0 &&
                                <div>
                                    <h2 className="text-inter">Czym jest niebieski smok?</h2>
                                    <hr/>
                                    <figure className="figure float-end">
                                        <img src={Smok0} alt="Smok niebieski" width={250} className="figure-img img-fluid rounded mt-3 me-3" />
                                    </figure>
                            <p  >Niebieski smok morski, zwany również jaskółką morską to gatunek jadowitego morskiego ślimaka
                                tyłoskrzelnego, który występuje w wodach umiarkowanych i tropikalnych. Gromadzi jad w
                                końcówkach odnóży, dlatego <b> NIE WOLNO GO DOTYKAĆ</b>.
                            </p>
                                    <hr/>
                                    <p>
                                    <h3>Ciekawostka!</h3>
                                        Są to jedne na najbardziej inteligentnych głowonogów. Potrafią nawet rozwiązywać
                                        zagadki i bardzo szybko dostosowują się do zmieniających się warunków.
                                    </p>
                            </div>
                        }
                            {parseInt(searchParams.get("id")) === 1 &&
                            <div>
                                <h2 className="text-inter">Występowanie</h2>
                                <hr/>
                                <p>
                                    Występuje w otwartych, ciepłych wodach w pobliżu wybrzeży Morza Śródziemnego i Atlantyku.
                                    W szczególności w okolicach wybrzeży europejskich, RPA, Mozambiku i wschodnim wybrzeżu Australii.
                                </p>
                                <p>
                                    <hr/>
                                    <h3>Ciekawostka!</h3>
                                    Czasami, wyrzucony przez fale pojawia się na plażach, ale pamiętajcie, że nie wolno go dotykać.
                                </p>
                            </div>
                            }
                            {parseInt(searchParams.get("id")) === 2 &&
                                <div>
                                    <h2 className="text-inter">Wygląd</h2>
                                    <hr/>
                                    <p >
                                        <figure className="figure float-start">
                                            <img src={Smok2} alt="Smok niebieski" width={300} className="figure-img img-fluid rounded mt-5 me-3" />
                                        </figure>
                                        Osiąga długość od 0,5 do 3 cm. Jego ciało jest spłaszczone i zwęża się ku tyłowi.
                                        Ma sześć rozgałęziających się kończyn (pierwsza para jest szczególnie duża) tworzących tzw.
                                        ceratę. Jest barwy srebrzysto-szarej przechodzącej w srebrzysto-błękitną po stronie grzbietowej,
                                        a granatowo-niebieskiej od spodniej. Na głowie ma ciemnoniebieskie paski.
                                        W jego gardle znajduje się tarka pokryta rzędami chitynowych zębów.
                                    </p>
                                    <p>
                                        <h3>Maskowanie</h3>
                                        Potrafi świetnie się maskować. Jego barwy ciała są w tonacjach niebieskich, aby wmieszać go w otoczenie i chronić przed potencjalnymi drapieżnikami. Strona brzuszna, unosząca się na powierzchni ma barwy wody, co stanowi ochronę przed ptactwem wodnym. Strona grzbietowa z kolei skierowana jest w stronę dna, co ma za zadanie zmylić ryby drapieżne.
                                    </p>
                                    <p>
                                        <hr/>
                                        <h3>Ciekawostka!</h3>
                                        Ciekawostka: Pływa „głową w dół” wykorzystując gaz w swoim żołądku.
                                    </p>
                                </div>
                            }
                            {parseInt(searchParams.get("id")) === 3 &&
                                <div>
                                    <h2 className="text-inter">Żerowanie</h2>
                                    <hr/>
                                    <p >
                                        <h3>Co je ślimak?</h3>
                                        Żeruje na organizmach większych od siebie i jadowitych, szczególnie gustuje w żeglarzu portugalskim.
                                    </p>
                                    <p>
                                        Przysmaki niebieskiego smoka morskiego:
                                        <ul>
                                            <li>Żeglarz portugalski</li>
                                            <li>Żeglarz wiatrowy</li>
                                            <li>Meduzy z gatunku błękitny przycisk</li>
                                            <li>Tratewnik jantina</li>
                                            <li>Czasami inne smoki morskie</li>
                                        </ul>
                                    </p>

                                    <p>
                                        <hr/>
                                        <h3>Ciekawostka!</h3>
                                        Nie szkodzą mu jadowite meduzy, które są jego ofiarami.
                                        Przechowuje ich toksyny w końcówkach odnóży i wykorzystuje je do obrony przed innymi drapieżnikami.
                                    </p>
                                </div>
                            }
                            {parseInt(searchParams.get("id")) === 4 &&
                                <div>
                                    <h2 className="text-inter">Rozmnażanie</h2>
                                    <hr/>
                                    <p >
                                        Organizmy te są obojnakami. Kopulują ze sobą poprzez połączenie się stronami brzusznymi. Po zapłodnieniu osobniki, które uczestniczyły w kopulacji, wytwarzają sznury z jajami na kawałki drewna bądź szczątki ofiar. Złożone jaja mogą również unosić się w wodzie.
                                    </p>
                                </div>
                            }
                            {parseInt(searchParams.get("id")) === 5 &&
                                <div>
                                    <h2 className="text-inter">Już prawie koniec!</h2>
                                    <hr/>
                                    <p>Dziękujemy za przeczytanie informacji zamieszczonych na stronie! Możesz teraz wypełnić krótki quiz który sprawdzi jak dobrze zapamiętałeś przeczytane informacje oraz twoją opinię o stronie. Jest tylko jeden warunek: <b>Nie podglądaj odpowiedzi na stronie, odpowiadaj tylko z pamięci!</b>  </p>
                                    <p>Link do quizu: <a className="link-dark" href="https://forms.office.com/e/zsWDcLv1jy">https://forms.office.com/e/zsWDcLv1jy</a></p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className=" shadow-inter rounded-2 mx-2 my-3 p-3 col-4">
                        <div >
                            {parseInt(searchParams.get("id")) === 0 &&
                            <p>
                                <h3>Systematyka:</h3>
                                <hr/>
                            <ul>
                                <li>Domena: eukarionty</li>
                                <li>Królestwo: zwierzęta</li>
                                <li>Typ: mięczaki</li>
                                <li>Gromada: ślimak</li>
                                <li>Podgromada: tyłoskrzelne</li>
                                <li>Rząd: nagoskrzelne</li>
                                <li>Rodzina: Glaucidae (gladusziowate)</li>
                                <li>Rodzaj: Glaucus</li>
                                <li>Łacińska nazwa: Glaucus atlanticus</li>
                            </ul>
                            </p>
                            }
                            {parseInt(searchParams.get("id")) === 1 &&
                                <p>
                                    <h3>Wpływ zmian klimatu</h3>
                                    <hr/>
                                    Ostatnio, ze względu na ocieplenie klimatu, co raz częściej pojawia się u wybrzeży Hiszpanii.
                                    <figure className="figure">
                                        <img src={Wybrzeze} alt="Smok niebieski" width={350} className="figure-img img-fluid rounded mx-auto mt-3" />
                                    </figure>
                                </p>
                            }
                            {parseInt(searchParams.get("id")) === 2 &&
                                <p>
                                    <h3>Poza wodą</h3>
                                    <hr/>
                                    <figure className="figure">
                                        <img src={Smok3} alt="Smok niebieski" width={350} className="figure-img img-fluid rounded mx-auto mt-3" />
                                    </figure>
                                    Wygląda trochę jak kosmita, prawda?
                                </p>
                            }
                            {parseInt(searchParams.get("id")) === 3 &&
                                <p>
                                    <h3>Żeglarz portugalski</h3>
                                    <hr/>
                                    Żeglarz portugalski to parzydełkowiec, który również z wyglądu przypomina kosmitę. Jad w jego parzydełkach jest groźny dla ludzi. Co ciekawe, żeglarz portugalski nie ma wpływu na to gdzie się porusza, jego ruchy są dyktowane prądami morskimi, a jedyną formą obrony przez drapieżnikami są właśnie parzydełka.
                                    <figure className="figure">
                                        <img src={Zeglarz} alt="Smok niebieski" width={350} className="figure-img img-fluid rounded mx-auto mt-3" />
                                    </figure>
                                </p>
                            }
                            {parseInt(searchParams.get("id")) === 4 &&
                                <p className="px-2">
                                    <h3>Sznury jajek</h3>
                                    <hr/>
                                    Jeden sznur zawiera od 12 do 96 białawych jaj i mierzy do 17 mm.
                                    <figure className="figure">
                                        <img src={Eggs} alt="Smok niebieski" width={350} className="figure-img img-fluid rounded mx-auto mt-3" />
                                    </figure>
                                </p>
                            }
                            {parseInt(searchParams.get("id")) === 5 &&
                                <img src={Smok} alt="Smok niebieski" width={440} className="m-auto" />
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex-row justify-content-around ">
                        <Link className={`m-1 p-3 btn btn-inter shadow-sm ${parseInt(searchParams.get("id")) > -1 ? "visible" : "invisible"}`} to={`/intermediate/${parseInt(searchParams.get("id")) === 0 ?" ":'page?id='+(parseInt(searchParams.get("id"))-1).toString()}`}  >Poprzednia</Link>
                        <Link className={`m-1 p-3 btn btn-inter shadow-sm ${parseInt(searchParams.get("id")) < 5 ? "visible" : "invisible"}`} to={`/intermediate/page?id=${parseInt(searchParams.get("id"))+1}`} >Następna</Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Page;