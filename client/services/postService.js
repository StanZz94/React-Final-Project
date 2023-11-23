const baseUrl = 'http://127.0.0.1:3030/jsonstore';

export const create = async (postData) => {
    const res = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    const result = await res.json();

    return result;
}