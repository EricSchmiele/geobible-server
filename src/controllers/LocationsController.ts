import { Request, Response } from 'express';
import knex from '../database/connection';

class LocationsController {
    async create (request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            epoch,
            books,
            chapters,
            verses
        } = request.body;
    
        const trx = await knex.transaction();

        const location = {
            name,
            latitude,
            longitude,
            epoch
        };
    
        const insertedIds = await trx('locations').insert(location);
    
        const location_id = insertedIds[0];
    
        const locationVerse = verses.map((verse: number, index: number) => {
            //TODO: fazer busca de verso
            const verse_id = verse;
    
            return {
                location_id,
                verse_id
            };
        });
    
        await trx('locattion_verses').insert(locationVerse);
    
        return response.json({
            id: location_id,
            ...location
        });
    }
}

export default LocationsController;