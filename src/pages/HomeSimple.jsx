import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const HomeSimple = () => {

    return(
        <>
            <div className="m-5">
                <h1>Ślimak, czy mały smok?</h1>
                <hr/>
                <p>Witaj!</p>
                <p>
                    Cieszymy się, że tu jesteś i chcesz dowiedzieć się więcej o naszym ulubionym zwierzątku - Niebieskim Smoku Morskim. Przeczytaj uważnie informacje znajdujące się na stronie, a potem spróbuj odpowiedzieć na kilka pytań w formularzu, do którego link znajduje się na stronie końcowej, żebyśmy mogli dowiedzieć się, jak dobrze udało Ci się przyswoić te informacje.
                </p>
                <p>
                    Będziemy bardzo wdzięczne za uważne wykonanie zadania, bardzo nam w ten sposób pomożesz w naszej pracy dyplomowej.
                    Zapraszamy!
                </p>
                <Link to="/simple/page?id=0" className="text-dark">Następna</Link>
            </div>
            {/*<div>*/}
            {/*    <h4 className="m-5">Legenda:</h4>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            */}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </>
    )
};

export default HomeSimple;