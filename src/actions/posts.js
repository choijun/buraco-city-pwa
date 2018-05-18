export const LIST_POSTS = 'LIST_POSTS';

export const listPosts = () => {
    return {
        type: LIST_POSTS,
        payload: [
            {
                author: 'Paulo Matos',
                message: 'Quero cerveja'
            },
            {
                author: 'Fernando Albino',
                message: 'Quero jogar video game'
            },
            {
                author: 'Irlan Gomes',
                message: 'Quero churrasco'
            }
        ]
    }
};