import axios from "axios";
import {Link} from "./link.ts";

export async function getUrl(id : number){
    const response = await axios.get(`http://127.0.0.1:8000/${id}`, {headers:{'Access-Control-Allow-Origin' : '*'}})
    const result : Link = {url: response.data.url, expirationDate: response.data.expireDate}
    return result
}

export async function postUrl(link : Link){
    // @ts-ignore
    const response = await axios.post("http://127.0.0.1:8000/add", {url:link.url, expiration_date: link.expirationDate}, {headers:{'Access-Control-Allow-Origin' : '*'}})
    return response.data
}