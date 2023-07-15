import React, {useEffect, useState} from 'react';
import "../shared/styles.css"
import validator from 'validator'
import {postUrl} from "../shared/api.ts";
import {MantineProvider, Radio, Button, TextInput} from "@mantine/core";
import {useStyles} from "../shared/styles.ts";

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
    postUrl({url: url, expirationDate: expireDate}).then(r =>window.location.replace(`/result/${r}`))
}

const Home = () => {
    [selected, setSelected] = useState("hour");
    [url, setUrl] = useState("");
    [comment, setComment] = useState("");
    [valid, setValid] = useState(false);
    const { classes} = useStyles();
    useEffect(() => {
        if (url == ""){
            setComment("");
            setValid(false)
        }
        else {
            if (validator.isURL(url)) {
                setComment("")
                setValid(true)
            } else {
                setComment("Ваша ссылка неправильная")
                setValid(false)
            }
        }
    }, [url])
    return (
        <MantineProvider>
            <form className={"create-link-form"} onSubmit={(e) => e.preventDefault()}>
                <h1 className={"header"}>Сокращатель ссылок</h1>
                <hr/>
                <div className={"form-items"}>
                    <h2 className={"instruction"}> Введите адрес ссылки:</h2>
                    <div className={"field-with-comment"}>
                        <TextInput type={"url"} placeholder={"Ваша ссылка"} className={"field"} error={comment} onChange={(e) => setUrl(e.target.value)}/>
                    </div>
                    <div>
                        <Button variant={"outline"} className={"create-button"} color={"dark"} onClick={() => tryPosting()}>Создать</Button>
                    </div>
                    <h3 className={"instruction"}>Выберите срок действия ссылки:</h3>
                    <Radio.Group value={selected} onChange={setSelected}>
                        <Radio classNames={{label: classes.radioLabel}} className="radio" label = {"1 час"} value="hour" onChange={(event)=>setSelected(event.target.value)}/>
                        <Radio classNames={{label: classes.radioLabel}} className="radio" label = {"1 день"} value="day" onChange={(event)=>setSelected(event.target.value)}/>
                        <Radio classNames={{label: classes.radioLabel}} className="radio" label = {"1 неделя"} value="week" onChange={(event)=>setSelected(event.target.value)}/>
                    </Radio.Group>
                </div>
                <hr/>
                <p className={"credits"}>Сделано с любовью Александром Маратовичем</p>
            </form>
        </MantineProvider>
    );
};

export default Home;