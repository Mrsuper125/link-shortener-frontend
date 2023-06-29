import React from 'react';
import {link} from "../shared/link.ts";
import {useParams} from "react-router-dom";

const Redirect = () => {

    const links : link[] = ([
        {url:"https://www.youtube.com/", id:1, expirationDate:10},
        {url:"https://stackoverflow.com/", id:2, expirationDate:10},
        {url:"https://github.com/", id:3, expirationDate:10},
        {url:"https://react.dev/", id:3, expirationDate:10}
    ])

    const params = useParams();

    let found : link|undefined = links.find(i => i.id === parseInt(params.id as string));

    if (found != undefined){
        window.location.replace(found.url);
    }
    else {
        window.location.replace("/error")
    }

    return (
        <div>

        </div>
    );
};

export default Redirect;