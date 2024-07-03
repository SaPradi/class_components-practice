import api from '../config/axios';

export class CatApiService {
    getCat() {
        return api.get('images/search?limit=10&has_breeds=1')
            .then(response => response.data)
            .catch(error => {
                console.error("Error al obtener los datos de los gatos", error);
                throw error;
            });
    }
}
