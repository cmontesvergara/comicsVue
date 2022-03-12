
import axios from "axios";


export default{
    getComic(valor){
        //obtiene toda la info de un un comic
       const endPoint = ruta(randomValue(valor));
        return axios.get(endPoint);
    },
     getEndComic() {
        //  debido a que servidor de la api restringe la entrega de la informacion por CORS se hace uso de reescrituraen desarrollo y la optencion de la informacion atravez de un aplicativo de terceros para el aplicativo en desarrollo
        if(process.env.NODE_ENV=='development'){
            return axios.get(`/api/info.0.json`);
        }else if(process.env.NODE_ENV=='production'){
            return axios.get(`https://fathomless-fjord-07910.herokuapp.com/xkcd.com/info.0.json`);
        }
       
           
     }
    
}


function ruta(pos=1){
    //  debido a que servidor de la api restringe la entrega de la informacion por CORS se hace uso de reescrituraen desarrollo y la optencion de la informacion atravez de un aplicativo de terceros para el aplicativo en desarrollo
    if(process.env.NODE_ENV=='development'){
        return `/api/${pos}/info.0.json`
    }else if(process.env.NODE_ENV=='production'){
        return `https://fathomless-fjord-07910.herokuapp.com/xkcd.com/${pos}/info.0.json`
    }
}

function randomValue(value){
    // genera un valor randon entre 1 y maxivo valor valido de la api el cual es optenido atraves del metodo getEndComic
    return Math.floor(Math.random() * (value - 1)) + 1;
}