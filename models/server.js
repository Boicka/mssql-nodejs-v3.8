const express = require('express');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routePath = '/api/usuarios';
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // Directorio público
        this.app.use(express.static('public'));

        // Lectura y parseo del body
        this.app.use(express.json());

        // Uso de morgan, peticiones en consola del servidor
        this.app.use(morgan('dev'));
    }

    routes() {
        this.app.use(this.routePath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor ejecutandose en el puerto: ', this.port);
        });
    }
}

module.exports = Server;