const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ngo_id = request.headers.authorization;

        const result = await connection('ngos').where('id', ngo_id).select('*');
    
        return response.json(result);
    },
};