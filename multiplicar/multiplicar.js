
//requireds
const fs = require('fs');
var colors = require('colors');
let data='';


let crearArchivo = (base,limite = 10) => {
    return new Promise ((resolve,reject) => {  
        if (!Number(base)){
            reject(`El valor ${base} no es un número`);
            return;
        }
        
        for(let i =1; i <= limite; i ++){           
               data+=` ${base}  * ${i} = ${base * i} \n`;        
        }        
        let err;
        fs.writeFile(`../tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            else{
                resolve(`tabla-${base}.txt`);
            }
        });
    });
}


let listarTabla = (base,limite = 10) =>
{

    return new Promise ((resolve,reject) => {

    for(let i =1; i <= limite; i ++){           
        data+=`${base}  * ${i} = ${base * i} \n`;        
    }        
 
    if (data=== ''){
         reject(data);
    }
    else{
        resolve(`El resultado de la lista es  \n ${data}`);
    }



    });

}

module.exports ={
    crearArchivo ,listarTabla 
}
     

