import React, {useEffect, useState} from 'react';
import {Link, useLocation, useSearchParams} from "react-router-dom";

const Page = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className="d-flex flex-column py-2 m-5 px-5 ">
            {parseInt(searchParams.get("id")) === 0 &&
                <>
                    <h2>Czym jest smok niebieski?</h2>
                    <hr/>
                    <p>Niebieski smok morski, zwany również jaskółką morską to gatunek jadowitego morskiego ślimaka
                        tyłoskrzelnego, który występuje w wodach umiarkowanych i tropikalnych. Gromadzi jad w
                        końcówkach odnóży, dlatego NIE WOLNO GO DOTYKAĆ.
                    </p>
                    <h4> Systematyka:</h4>
                    <p>
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
                    </p>
                    <h4>Ciekawostka:</h4>
                    <p>
                        Są to jedne na najbardziej inteligentnych głowonogów. Potrafią nawet rozwiązywać
                        zagadki i bardzo szybko dostosowują się do zmieniających się warunków.
                    </p>
                </>
            }
            {parseInt(searchParams.get("id")) === 1 &&
                <>
                    <h2> Występowanie</h2>
                    <hr/>
                    <p>
                        Występuje w otwartych, ciepłych wodach w pobliżu wybrzeży Morza Śródziemnego i Atlantyku. W
                        szczególności w okolicach wybrzeży europejskich, RPA, Mozambiku i wschodnim wybrzeżu Australii.
                    </p>
                    <p>
                        Ostatnio, ze względu na ocieplenie klimatu, co raz częściej pojawia się u wybrzeży Hiszpanii.
                    </p>
                    <h4>Ciekawostka:</h4>
                    <p>
                        Czasami, wyrzucony przez fale pojawia się na plażach, ale pamiętajcie, że nie wolno go dotykać.
                    </p>
                </>
            }
            {parseInt(searchParams.get("id")) === 2 &&
                <>
                    <h2>Wygląd</h2>
                    <hr/>
                    <p>
                        Osiąga długość od 0,5 do 3 cm. Jego ciało jest spłaszczone i zwęża się ku tyłowi. Ma sześć
                        rozgałęziających się kończyn (pierwsza para jest szczególnie duża) tworzących tzw. ceratę. Jest
                        barwy
                        srebrzysto-szarej przechodzącej w srebrzysto-błękitną po stronie grzbietowej, a granatowo-
                        niebieskiej od spodniej. Na głowie ma ciemnoniebieskie paski. W jego gardle znajduje się tarka
                        pokryta rzędami chitynowych zębów. Wygląda trochę jak kosmita, prawda?
                    </p>
                    <h4>Maskowanie</h4>
                    <p>
                        Potrafi świetnie się maskować. Jego barwy ciała są w tonacjach niebieskich, aby wmieszać go w
                        otoczenie i chronić przed potencjalnymi drapieżnikami. Strona brzuszna, unosząca się na
                        powierzchni
                        ma barwy wody, co stanowi ochronę przed ptactwem wodnym. Strona grzbietowa z kolei skierowana
                        jest w stronę dna, co ma za zadanie zmylić ryby drapieżne.
                    </p>
                    <h4>Ciekawostka</h4>
                    <p>Pływa „głową w dół” wykorzystując gaz w swoim żołądku.</p>
                </>
            }
            {parseInt(searchParams.get("id")) === 3 &&
                <>
                    <h2>Żerowanie</h2>
                    <hr/>
                    <p>
                        Żeruje na organizmach większych od siebie i jadowitych, szczególnie gustuje w żeglarzu
                        portugalskim.
                        <br/><br/>
                        Przysmaki niebieskiego smoka morskiego:
                        <ul>
                            <li>Żeglarz portugalski</li>
                            <li>Żeglarz wiatrowy</li>
                            <li>Meduzy z gatunku błękitny przycisk</li>
                            <li>Tratewnik jantina</li>
                            <li>Czasami inne smoki morskie</li>
                        </ul>
                    </p>
                    <h4>O żeglarzu portugalskim</h4>
                    <p>
                        Żeglarz portugalski to parzydełkowiec, który również z wyglądu przypomina kosmitę. Jad w jego
                        parzydełkach jest groźny dla ludzi. Co ciekawe, żeglarz portugalski nie ma wpływu na to gdzie
                        się
                        porusza, jego ruchy są dyktowane prądami morskimi, a jedyną formą obrony przez drapieżnikami są
                        właśnie parzydełka.
                    </p>
                    <p>
                        <h4>Ciekawostka</h4>
                        Nie szkodzą mu jadowite meduzy, które są jego ofiarami. Przechowuje ich toksyny w
                        końcówkach odnóży i wykorzystuje je do obrony przed innymi drapieżnikami.

                    </p>
                    <h2>Rozmnażanie</h2>
                    <p>
                        Organizmy te są obojnakami. Kopulują ze sobą poprzez połączenie się stronami brzusznymi. Po
                        zapłodnieniu osobniki, które uczestniczyły w kopulacji, wytwarzają sznury z jajami na
                        kawałki drewna bądź szczątki ofiar. Złożone jaja mogą również unosić się w wodzie.
                    </p>
                    <p>
                        Jeden sznur zawiera od 12 do 96 białawych jaj i mierzy do 17 mm.
                    </p>
                </>
            }
            {parseInt(searchParams.get("id")) === 4 &&
                <>
                    <h2>Już prawie koniec!</h2>
                    <hr/>
                    <p>Dziękujemy za przeczytanie informacji zamieszczonych na stronie! Możesz teraz wypełnić krótki quiz który sprawdzi jak dobrze zapamiętałeś przeczytane informacje oraz twoją opinię o stronie. Jest tylko jeden warunek: <b>Nie podglądaj odpowiedzi na stronie, odpowiadaj tylko z pamięci!</b>  </p>
                    <p>Link do quizu: <a className="link-dark" href="https://forms.office.com/e/f1HwDsfyxs">https://forms.office.com/e/f1HwDsfyxs</a></p>
                </>
            }

            <div className="d-flex flex-row justify-content-between ">
                <Link className={`link-dark ${parseInt(searchParams.get("id")) > -1 ? "visible" : "invisible"}`}
                      to={`/simple/${parseInt(searchParams.get("id")) === 0 ? " " : 'page?id=' + (parseInt(searchParams.get("id")) - 1).toString()}`}>Poprzednia</Link>
                <Link className={` link-dark ${parseInt(searchParams.get("id")) < 4 ? "visible" : "invisible"}`}
                      to={`/simple/page?id=${parseInt(searchParams.get("id")) + 1}`}>Następna</Link>
            </div>
        </div>
    )
};

export default Page;