import * as request from '../utils/request';

export const search = async (q, type = 'less') => {
    try {
        const result = await request.getApiData('users/search', {
            params: {
                q: q,
                type: type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
