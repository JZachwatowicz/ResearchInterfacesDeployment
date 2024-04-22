import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Smok from "../images/smok-niebieski.jpg"
import NavigationIntermediate from "../components/NavigationIntermediate";
const Home = () => {

    return(
        <>
        <NavigationIntermediate/>
        <div className="d-flex flex-column py-2 mx-5 my-3 px-3 align-items-center">
            <h2 className="flex-row">Ślimak, czy mały smok?</h2>
            <div className="d-flex flex-row">
            <div className=" shadow-inter rounded-2 mx-2 my-3 p-3 ">
                <div >
                    <figure className="figure float-start">
                        <img src={Smok} alt="Smok niebieski" width={250} className="figure-img img-fluid rounded mt-3 me-3" />
                    </figure>
                    <p>Witaj!</p>
                    <p>


                        Cieszymy się, że tu jesteś i chcesz dowiedzieć się więcej o naszym ulubionym zwierzątku - Niebieskim Smoku Morskim. Przeczytaj uważnie informacje znajdujące się na stronie, a potem spróbuj odpowiedzieć na kilka pytań w formularzu, do którego link znajduje się na stronie końcowej, żebyśmy mogli dowiedzieć się, jak dobrze udało Ci się przyswoić te informacje.


                    </p>
                    <p>
                        Będziemy bardzo wdzięczne za uważne wykonanie zadania, bardzo nam w ten sposób pomożesz w naszej pracy dyplomowej.
                        Zapraszamy!
                    </p>

                </div>
                <div className="d-flex flex-row-reverse  ">
                    <Link className="m-1 p-3 btn btn-inter shadow-sm justify-self-end" to="page?id=0" >Rozpocznij</Link>
                </div>
            </div>
            </div>
        </div>
        </>
    )
};

export default Home;