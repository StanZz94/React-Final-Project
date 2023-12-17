import * as request from "../services/request";

const baseUrl = 'http://127.0.0.1:3030/data/comments';

export const getAll = async (postId) => {
    const query = new URLSearchParams({
        where:`postId="${postId}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (postId, comment) => {
    const newComment = await request.post(baseUrl, {
        postId,
        comment,
    });

    return newComment;
};

export const remove = async (commentId) => request.del(`${baseUrl}/${commentId}`);