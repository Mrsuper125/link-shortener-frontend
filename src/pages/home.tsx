import React, {useEffect, useState} from 'react';
import "../shared/styles.css"
import validator from 'validator'
import {postUrl} from "../shared/api.ts";

let selected : string, url : string, comment : string;
let setSelected : React.Dispatch<string>, setUrl : React.Dispatch<string>, setComment : React.Dispatch<string>;
let valid: boolean
let setValid: React.Dispatch<boolean>

function tryPosting(){
    if (!valid) return;
    const dateTime = Date.now();
    const timestamp = dateTime / 1000;
    let deltaTime = 0;
    switch (selected){
        case 'hour':
            deltaTime = 3600;
            break
        case 'day':
            deltaTime = 86400;
            break;
        case 'week':
            deltaTime = 604800;
            break;
    }
    const expireDate = timestamp+deltaTime;
    postUrl({url:url, id:0, expirationDate:expireDate})
    window.location.reload()
}

const Home = () => {
    [selected, setSelected] = useState('hour');
    [url, setUrl] = useState("");
    [comment, setComment] = useState("");
    [valid, setValid] = useState(false);
    useEffect(() => {
        if (url == ""){
            setComment("");
            setValid(false)
        }
        else {
            if (validator.isURL(url)){
                setComment("")
                setValid(true)
            }
            else {
                setComment("Ваша ссылка неправильная")
                setValid(false)
            }
        }
    }, [url])
    return (
        <form className={"create-link-form"} onSubmit={(e) => e.preventDefault()}>
            <h1 className={"header"}>Сокращатель ссылок</h1>
            <hr/>
            <div className={"form-items"}>
                <h2 className={"instruction"}> Введите адрес ссылки:</h2>
                <div className={"field-with-comment"}>
                    <input type={"url"} placeholder={"Ваша ссылка"} className={"field"} onChange={(e) => setUrl(e.target.value)}/>
                    <p className={"comment"} id={"comment"}>{comment}</p>
                </div>
                <div>
                    <button className={"create-button"} onClick={() => tryPosting()}>Создать</button>
                </div>
                <h3 className={"instruction"}>Выберите срок действия ссылки:</h3>
                <div className={"radio-group"}>
                    <div>
                        <input type={"radio"} className={"radio"} name={"expireDate"} id = {"hour"} checked={selected === "hour"} onChange={(event)=>setSelected(event.target.id)}/>
                        <label className={"radio-label"}>1 час</label>
                    </div>
                    <div>
                        <input type={"radio"} className={"radio"} name={"expireDate"} id = {"day"} checked={selected === "day"} onChange={(event)=>setSelected(event.target.id)}/>
                        <label className={"radio-label"}>1 сутки</label>
                    </div>
                    <div>
                        <input type={"radio"} className={"radio"} name={"expireDate"} id = {"week"} checked={selected === "week"} onChange={(event)=>setSelected(event.target.id)}/>
                        <label className={"radio-label"}>1 неделя</label>
                    </div>
                </div>
            </div>
            <hr/>
            <p className={"credits"}>Сделано с любовью Александром Маратовичем</p>
        </form>
    );
};

export default Home;