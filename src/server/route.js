const express = require('express');
var router = express.Router();
var student = require('./controllers/studentsCtrl');

//defining route for the cruds
router.get('/students/',student.getAll);
router.get('/students/:id',student.getOne);
router.post('/students',student.create);
router.put('/students/:id',student.update);
router.delete('/students/:id',student.delete);

module.exports = router;