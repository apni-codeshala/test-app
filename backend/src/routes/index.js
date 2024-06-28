const express = require('express');
const {create, getAll, getById, destroy, update} = require('../controller/message.controller')

const router = express.Router();

router.post('/create', create);
router.get('/getall', getAll);
router.get('/getbyid/:id', getById);
router.delete('/delete/:id', destroy);
router.patch('/update', update);

module.exports = router;