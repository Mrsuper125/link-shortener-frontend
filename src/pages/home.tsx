import React, {useState} from 'react';
import "../shared/styles.css"

const Home = () => {
    const [selected, setSelected] = useState('hour');
    return (
        <form className={"create-link-form"} onSubmit={(e) => e.preventDefault()}>
            <h1 className={"header"}>Сокращатель ссылок</h1>
            <hr/>
            <div className={"form-items"}>
                <h2 className={"instruction"}> Введите адрес ссылки:</h2>
                <div className={"field-with-comment"}>
                    <input type={"url"} placeholder={"Ваша ссылка"} className={"field"}/>
                    <p className={"comment"} id={"comment"}>Норм</p>
                </div>
                <div>
                    <button className={"create-button"}>Создать</button>
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