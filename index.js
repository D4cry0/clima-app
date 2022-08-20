import dotenv from 'dotenv'
dotenv.config()

import { leerInput,
            inquirerMenu,
            pausa, } from "./helpers/inquirer.js"
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
                const lugar = await leerInput('Ciudad: ');
                // Buscar lugares
                await busquedas.ciudad( lugar );
                // Seleccionar el lugar

                // Clima

                // Mostarr resultado
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
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

