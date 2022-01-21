const userController = require('../controllers/user.controller')

const router = require('express').Router()


router.get('/getName', userController.getName);
router.get('/sorting', userController.sorting);
router.get('/fullTextSearch', userController.fullTextSearch);
router.get('/getDate', userController.getDate);
router.get('/allData', userController.allData);
                                      
module.exports= router;
