const {response} = require('express');
const db = require('../database/dbconfig');

//database temp
const users = [
    {
        id: 1,
        name: 'Juan',
        lname: 'Yebra',
        key: '7894'
    },{
        id: 2,
        name: 'Pedro',
        lname: 'Cano',
        key: '1578'
    },{
        id: 3,
        name: 'Isaias',
        lname: 'Abonce',
        key: '7410'
    },{
        id: 4,
        name: 'Lorena',
        lname: 'Cerver',
        key: '8520'
    },{
        id: 5,
        name: 'Sergio',
        lname: 'Cabrera',
        key: '8520'
    },
];

const usuariosGet = (req, res = response) => {
   db.getTable()
        .then(msg =>{
            const meta = msg.recordset;
            res.json(meta);
        })
        .catch(err => {
            res.json(err);
        })
}

const usuariosGetId = async (req, res = response) => {
    const {id} = req.params;
    const respuesta = await db.searchById(id);
    console.log(respuesta);
    if(!respuesta.length == 0){
        res.json(respuesta);
    }else{
        res.status(500).json(Error(`No se encontro el id: ${id}`));
    }
}

// const usuariosPost = (req, res = response) => {
//     if(!respuesta == null || !respuesta == undefined){
//         res.json(respuesta);
//     }else{
//         res.json({msg: 'Algo salio mal'});
//     }
// }

const usuariosPost = (request, res = response) => {

    const {name, lname, key, pass} = request.body;
    db.addRecord(name, lname, key, pass);
    res.json('todo bien');
}


const usuariosPut = (req, res = response) => {
    const {pass} = req.body;
    console.log(pass, 'debio llegar');
    res.json('recibido');
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Controlador',
    });
}
const usuariosDelete = (req, res = response) => {
    const {id} = req.params;
    const resp = db.deleteRecord(id);
    if(!resp[0] == 0){
        res.statusCode(500).json('No Encontrado');
    }else{
        res.json('Petición Realizada');
    }
}

module.exports = {
    usuariosGet,
    usuariosGetId,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,  
}