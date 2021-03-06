const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count(); // [count] ou count[0]
        console.log(count);

        const result = await connection('incidents')
            .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ngos.name', 'ngos.email', 'ngos.whatsapp', 'ngos.city', 'ngos.uf']);

        console.log(result);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(result);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ngo_id = request.headers.authorization;

        const ngoExist = await connection('ngos').select('*').where('id', ngo_id);

        console.log(ngoExist[0]);

        if (ngoExist[0] != null) {
            const result = await connection('incidents').insert({
                title, description, value, ngo_id
            })

            const id = result[0];
            return response.json({id});
        } else {
            return response.status('400').json({ error: 'No NGO found with this ID.'});
        }
    },

    async delete(request, response) {
        const { id } = request.params;
        const ngo_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ngo_id').first();

        if (incident.ngo_id != ngo_id) {
            return response.status(401).json({erro : 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};