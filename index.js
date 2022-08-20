import dotenv from 'dotenv'
dotenv.config()

import { leerInput,
            inquirerMenu,
            pausa,
            listarLugares, } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";

// process.env :: para acceder a las variables de entorno donde correo la app
//dotenv sirve para exportar las variables en archivos .env

const main = async() => {
    
    let opt = 0; 
    const busquedas = new Busquedas();

    do{

        opt = await inquirerMenu();

        switch( opt ){
            case 1:
                // Mostar msj
                const busqueda = await leerInput('Ciudad: ');
                // Buscar lugares
                const lugares = await busquedas.ciudad( busqueda );
                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                
                
                const lugarSel = lugares.find( l => l.id === id );
                
                
                // Clima

                // Mostarr resultado
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',lugarSel.nombre);
                console.log('Lat:',lugarSel.lat);
                console.log('Lng:',lugarSel.lng);
                console.log('Temperatura:',);
                console.log('Minima:',);
                console.log('Máxima:',);
                
                
                break;
            case 2:
                break;
        }

        if( opt !== 0 ) await pausa();

    }while( opt !== 0 );
}

main();

