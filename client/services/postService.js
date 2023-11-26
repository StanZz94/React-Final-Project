import { request } from "./request";

const baseUrl = 'http://127.0.0.1:3030/jsonstore/posts';

export const getAll = async () =>{
    const result = await request('GET', baseUrl);

    return Object.values(result);
}

export const create = async (postData) => {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    const result = await res.json();

    return result;
}