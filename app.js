//requireds

//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');
var colors = require('colors');
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs.js').argv;



     colors.setTheme({
       nombreArchivo: 'rainbow',
       mensajeCrear: 'grey',
       listadoMultiplicar: 'cyan',
       mensajeListado: 'grey',
       info: 'green',
       data: 'grey',
       help: 'cyan',
       warn: 'yellow',
       debug: 'blue',
       error: 'red'
     });

let comando = argv._[0];
switch(comando){
       case 'listar':
       listarTabla(argv.base,argv.limite)
       .then(lista => console.log(`Lista `.mensajeListado,`${lista}`.listadoMultiplicar))
       .catch(e => console.log(`Error ${e}`.magenta));
       break;

       case 'crear':
       crearArchivo(argv.base,argv.limite)
       .then(archivo => console.log(`El nombre del archivo es`.mensajeCrear,` ${archivo}`.nombreArchivo))
       .catch (e => console.log(`Error en la creacion del archivo : ${e}`.magenta));  
       break;

       default:
       console.log('El comando no existe'.bgCyan);
       

}





//console.log(crearArchivo);


//for(let i =1; i <= 10; i ++){
   
       //data+=` ${base}  * ${i} = ${base * i} \n`;

//}

//let err;
//fs.writeFile(`../tablas/tabla-${base}.txt`, data, (err) => {
    //if (err) throw err;
    //console.log('El archivo ha sido creado');
 //});

//console.log(module);
//console.log(process.argv);
//let argv2= process.argv;

console.log(`Base = ${argv.base}` );
console.log(`Limite = ${argv.limite}`);

//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(`El parametro es ${base}`);

 