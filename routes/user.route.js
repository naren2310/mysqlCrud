const userController = require('../controllers/user.controller')

const router = require('express').Router()

router.post('/createTable', userController.createTable);
router.post('/createUser', userController.createUser);
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getName', userController.getName);
router.get('/sorting', userController.sorting);
router.get('/fullTextSearch', userController.fullTextSearch);
router.get('/getDate', userController.getDate);
router.get('/:id', userController.getUserId);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
                                      
module.exports= router;
