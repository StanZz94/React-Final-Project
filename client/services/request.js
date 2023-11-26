export const request = async (method, url, data) => {
    const res = await fetch(url, { 
        method,
    });

    const result = res.json();

    return result;
}