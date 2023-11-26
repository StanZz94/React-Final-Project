import * as request  from "./request";

const baseUrl = 'http://127.0.0.1:3030/jsonstore/posts';

export const getAll = async () =>{
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const create = async (postData) => {

    const result = await request.post(baseUrl, postData);

    return result;
}