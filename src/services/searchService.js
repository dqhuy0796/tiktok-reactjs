import * as httpRequest from '../utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const result = await httpRequest.getApiData('users/search', {
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
