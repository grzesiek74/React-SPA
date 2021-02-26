import React from 'react';
import {Route} from 'react-router-dom';
import "../styles/Footer.css";

const Footer = () => {
    return ( 
        <div>
            <h2>Stopka</h2>

        {/* poprzez komponent Route mamy dostęp do match, params, pathc, url - jest to przydatne jeśli chcemy np wysyłać zapytania do bazy; na stronie nie jest to do niczego potrzebne*/}

            <Route path="/" exact render={(props) => {
                return (
                    <p>Jesteś na <span>stronie głównej</span></p>
                )
            }}/>

            <Route path="/:page" exact render={(props) => {
                console.log(props);
                return (
                <>
                    <p>Jesteś na <span>{props.match.params.page}</span></p>
                    <p>Jesteś na <span>{props.match.url}</span></p>
                    <p>Jesteś na <span>{props.match.path}</span></p>
                </>
                )
            }}/>

            <Route path="/:page/:idProduct" exact render={(props) => {
                console.log(props);
                return (
                <>
                    <p>Jesteś na <span>{props.match.params.idProduct}</span></p>
                    <p>Jesteś na <span>{props.match.url}</span></p>
                    <p>Jesteś na <span>{props.match.path}</span></p>
                </>
                )
            }}/>
        </div>
     );
}
 
export default Footer;