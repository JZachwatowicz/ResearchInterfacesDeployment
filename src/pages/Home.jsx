import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
const Home = () => {

    return(
        <>
            <div className="d-flex flex-row vh-100 justify-content-center">
                <Link className="btn btn-dark my-auto mx-3" style={{fontSize:32}} to="/simple/" id="scale"> Prosty </Link>
                <Link className="btn btn-inter my-auto mx-3" style={{fontSize:32}} to="/intermediate/" id="scale"> Średni </Link>
                <Link className="btn btn-primary my-auto mx-3" style={{fontSize:32}} to="/advanced/" id="scale"> Złożony </Link>
            </div>
        </>
    )
};

export default Home;