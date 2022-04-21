const { Router } = require('express');
const { usuariosGet,
        usuariosGetId,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/:id', usuariosGetId);

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id', usuariosDelete);

module.exports = router;