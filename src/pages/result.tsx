import React from 'react';
import {useParams} from "react-router-dom";

const Result = () => {
    const params = useParams();

    return (
        <div>
            Готово. Ваша ссылка:
            <a href={`http://${window.location.host}/${params.id}`}>{window.location.host}/{params.id}</a>
        </div>
    );
};

export default Result;