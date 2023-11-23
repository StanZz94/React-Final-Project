const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (data) => {
    const res = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = await res.json();

    return result;
}