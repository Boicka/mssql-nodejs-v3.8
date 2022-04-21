const dbconfig = require('./database/dbconfig');
// dbconfig.addRecord('Prueba1', 'Pruebal', ' some', '12348520');

// dbconfig.getTable()
//     .then(msg => {
//         const mio = msg.recordset
//         mio.forEach((registro, indice) => {console.log({registro, indice})});
//         console.log(mio);
//      })
//      .catch(err =>{
//          console.log(err);
//      });

// dbconfig.searchById(2);

dbconfig.deleteRecord(10);

// dbconfig.logIn('7410','Hola123');

// dbconfig.getColumns()
//     .then(msg => {
//         const mio = msg.recordset
//         mio.forEach((nombre, indice) => {console.log({nombre, indice})});
//         // console.log(mio);
//     })
//     .catch(err => {
//         console.log(err);
//     });



// const users = [
//     {
//         id: 1,
//         name: 'hola',
//         lname: 'hola2',
//         key: '8520'
//     },{
//         id: 2,
//         name: 'hola2',
//         lname: 'hola22',
//         key: '8520'
//     },{
//         id: 3,
//         name: 'hola2',
//         lname: 'hola22',
//         key: '8520'
//     },{
//         id: 4,
//         name: 'hola2',
//         lname: 'hola22',
//         key: '8520'
//     },{
//         id: 5,
//         name: 'hola2',
//         lname: 'hola22',
//         key: '8520'
//     },
// ];

// const colores = ['rojo', 'azul', 'verde', 'amarillo'];
// console.log(colores)
// colores.forEach((el, ind) => {
//     if(el == 'azul'){
//         const newColores = colores.splice(ind, 1);
//         console.log(newColores)
//     }
//     console.log(colores);
// })

// const newObj = users.forEach(ol => {
//     if(ol.id == 6){
//         console.log('No encontrado')
//     }else{
//         console.log(newObj);
//     }
// });

// console.log(users);
// users.forEach((item, count) => {
//     if(item.id == 5){
//         users.slice(count, 4);
//     }
// })
// console.log(users);

