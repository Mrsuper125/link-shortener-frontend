import React from 'react';
import {useParams} from "react-router-dom";
import {getUrl} from "../shared/api.ts";

const Redirect = () => {

    const params = useParams();

    let link = getUrl(parseInt(params.id as string))

    link.then((r) =>
    {
        if (r.url != undefined) {
            window.location.replace(r.url);
        } else {
            window.location.replace("/error")
        }
    }
    ).catch((reason) => {
        if (reason.response.data.message == "link not found") {
            window.location.replace("/error")
        }
    })

    return (
        <div>
        </div>
    );
};

export default Redirect;