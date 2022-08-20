import axios from 'axios';

class Busquedas {

    historial = ['Tegucigalpa','Madrid','San José'];

    constructor() {
        // TODO: leer db
    }

    get paramsMapBox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        };
    }

    async ciudad( lugar = '' ){
        // TODO: peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();
            console.log(resp.data);
    
            return []; // los lugares que coinciden

        } catch ( err ){
            return [];
        }
    }
}


export {
    Busquedas
}
